"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogCard from "../../../components/Card/BlogCard";
import { useParams } from "next/navigation";
import BlogCardSkeleton from "../../../components/Card/BlogCardSkleton";

const Page = () => {
  const { region, category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setBlogData(null);
      try {
        const res = await axios.get(`/api/region/${region}/${category}`);
        setBlogData(res.data.data);
      } catch (error) {}
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogData
    ? blogData.filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.description.toLowerCase().includes(searchTerm);
        return matchesSearch;
      })
    : [];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to Page 1 when searching
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-3 lg:p-20 space-y-10 pt-40">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-4xl font-bold lg:text-5xl text-center">
          Blogs & News
        </h1>
        <p>Read more about our journey and our work.</p>
        <div className="flex justify-center lg:justify-end w-full space-x-4">
          <input
            type="search"
            className="px-4 py-2 rounded-full w-fit border border-fairGrey outline-none"
            placeholder="Search blogs"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {blogData === null ? (
        <div className="w-full grid lg:grid-cols-3 gap-5">
          {[...Array(blogsPerPage).keys()].map((num) => (
            <BlogCardSkeleton key={num} />
          ))}
        </div>
      ) : blogData.length === 0 ? (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-2xl font-bold text-center">
            Oops! No blogs found.
          </p>
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-3 gap-5">
          {currentBlogs.map((data) => (
            <BlogCard key={data._id} {...data} />
          ))}
        </div>
      )}

      {filteredBlogs.length > 0 && (
        <div className="flex justify-center items-center space-x-2">
          {[
            ...Array(Math.ceil(filteredBlogs.length / blogsPerPage)).keys(),
          ].map((num) => (
            <button
              key={num + 1}
              onClick={() => paginate(num + 1)}
              className={`px-4 py-2 rounded-full  hover:bg-gray-300 transition-all ${
                currentPage === num + 1 ? "bg-green text-white" : "bg-gray-200"
              }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
