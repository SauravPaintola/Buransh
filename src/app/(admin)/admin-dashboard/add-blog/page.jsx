"use client";
import axios from "axios";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const predefinedTopics = [
  "District",
  "Food",
  "Culture",
  "Tourism",
  "Environment",
  "Mythological Beliefs",
];

const Page = () => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [desc, setDesc] = useState("");
  const [region, setRegion] = useState(""); // New state for region
  const [selectedTopics, setSelectedTopics] = useState([]); // State for topics

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleTopicChange = (topic) => {
    console.log(topic);
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
    console.log(selectedTopics);
  };

  const addBlog = async (e) => {
    e.preventDefault();
    if (!region) {
      return toast.error("Please select a region");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("region", region);
    formData.append("topics", JSON.stringify(selectedTopics));

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    const id = toast.loading("Adding Blog", {
      progress: 1,
      autoClose: false,
      closeOnClick: true,
    });

    try {
      const response = await axios.post("/api/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status === 201) {
        toast.update(id, {
          render: "Blog Added Successfully",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } else {
        toast.update(id, {
          render: "Some error occurred",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.update(id, {
        render: "Error adding blog",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="md:p-10 ] max-w-[1550px]  flex flex-col lg:flex-row min-h-screen w-full lg:-space-x-1 items-center justify-center z-40 shadow-lg">
      <div
        className="w-full h-full  rounded-md overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex flex-col w-full">
          <h2 className="text-xl  p-4 font-semibold">Add Blog</h2>
          <span className="bg-gradient-to-r from-gray-700 to-primary w-full h-[.7px]"></span>
        </div>
        <form onSubmit={addBlog} className="flex flex-col p-5 space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Blog Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text"
              id="title"
              className="w-full rounded-md p-1 outline-none border border-black bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="region"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Region
            </label>
            <select
              required
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-md p-1 outline-none border border-black bg-white"
            >
              <option value="">Select a region</option>
              <option value="Kumaon">Kumaon</option>
              <option value="Garhwal">Garhwal</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="topics"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Topics
            </label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedTopics.map((topic, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => handleTopicChange(topic)}
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 "
              htmlFor="file_input"
            >
              Blog Image
            </label>
            <input
              required
              onChange={handleImageChange}
              className="block w-full text-sm bg-white  cursor-pointer"
              id="file_input"
              type="file"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="max-w-full h-auto rounded-md"
                />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <div className="h-52 bg-white">
              <ReactQuill
                required
                id="description"
                className="text-black bg-white h-[68%] sm:h-[79%]"
                theme="snow"
                value={desc}
                onChange={setDesc}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green text-white text-sm px-5 w-fit p-2 rounded"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
