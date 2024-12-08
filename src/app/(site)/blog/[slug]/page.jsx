"use client";
import { CalendarIcon, TagIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "./style.css";
// BlogDetails Component
const BlogDetails = ({ blog, otherPosts }) => {
  console.log(otherPosts);
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen pt-32 p-3 lg:p-20 space-x-3">
      {/* Main Content (70%) */}
      <div className="lg:w-[70%] w-full lg:p-6 border rounded-md">
        {/* Blog Banner */}
        <div className="w-full h-56 lg:h-96 overflow-hidden mb-6 rounded">
          <img
            className="w-full h-full object-cover"
            src={blog.mainImg}
            alt={blog.title}
          />
        </div>

        {/* Blog Meta Data */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <CalendarIcon className="w-5 h-5 text-green" />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          <span className="flex items-center space-x-1">
            <TagIcon className="w-4 h-4 text-green" />
            <span>{blog.region}</span>
          </span>
        </div>

        {/* Blog Content */}
        <div className="blog-content text-lg leading-relaxed">
          <h1>{blog.title}</h1>
          {/* Rendering blog content as HTML */}
          <div
            className="text-fairGrey"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>

      {/* Sidebar (30%) */}
      <div className="lg:w-[30%] w-full p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Other Posts</h2>
        <ul className="space-y-4">
          {otherPosts.map((post) => (
            <li key={post._id} className="border-b pb-4 flex items-center">
              <img
                src={post.mainImg}
                alt={post.title}
                className="w-14 h-12 object-cover rounded mr-4"
              />
              <div>
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:underline text-blue-500"
                >
                  {post.title}
                </a>
                <p className="text-sm text-gray-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Page Component
const Page = () => {
  const [blog, setBlog] = useState({});
  const [otherPosts, setOtherPosts] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/${slug}`);
        setBlog(response.data.data);
        setOtherPosts(response.data.otherPosts);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return <BlogDetails blog={blog} otherPosts={otherPosts} />;
};

export default Page;
