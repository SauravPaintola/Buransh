"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import { toast } from "react-toastify";
import Link from "next/link";
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [blogData, setBlogData] = useState([]);
  const fetchBlogs = async () => {
    setBlogData([]);
    const res = await axios.get("/api/blog");
    setBlogData(res.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Combine filtering by search term and type filter
  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm);
    const matchesFilter = blog.region === filter || filter === "All";
    return matchesSearch && matchesFilter;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to Page 1 when searching
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1); // Reset to Page 1 when filtering
  };

  const onDelete = async (_id) => {
    try {
      await axios.delete(`/api/blog`, { data: { id: _id } });
      toast.success("Blog deleted successfully");
      console.log("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      toast.error("Error deleting blog");
      console.log("Error deleting blog");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-3 lg:p-20 space-y-10 pt-40">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-4xl font-bold lg:text-5xl text-center">
          Blogs & News
        </h1>
        <p>Read more about our journey and our work.</p>
        <div className="flex justify-center lg:justify-end w-full space-x-4">
          <Link className="h-full bg-green py-2 px-5 rounded-full text-white" href={"/admin-dashboard/add-blog"}>
            Add Blog
          </Link>
          <input
            type="search"
            className="px-4 py-2 rounded-full w-fit border border-fairGrey outline-none"
            placeholder="Search blogs"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            value={filter}
            onChange={handleFilter}
            className="px-4 py-2 rounded-full w-fit border border-fairGrey outline-none"
          >
            <option value="All">All</option>
            <option value="Kumaon">Kumaon</option>
          </select>
        </div>
      </div>

      {currentBlogs.length ? (
        <div className="w-full grid lg:grid-cols-3 gap-5">
          {currentBlogs.map((data) => (
            <BlogCard key={data._id} onDelete={onDelete} {...data} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl font-bold">
              Oops! No blogs found.
            </p>
          </div>
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
