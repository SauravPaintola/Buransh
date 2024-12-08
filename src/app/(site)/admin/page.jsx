"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [credentails, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();
  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axios.post(
        "/api/auth",
        { ...credentails },
        { withCredentials: true }
      );
      console.log(data);
      if (data.status === 200) {
        if (data.status === 200) {
          sessionStorage.setItem("admin_logged", true);
        }
        setStatus(data.data.message);
        router.push("/admin-dashboard");
      }
    } catch (error) {
      console.log(error);
      setStatus(error?.response?.data?.message);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setCredentials({ ...credentails, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <form
        onSubmit={handelLogin}
        className="flex justify-center p-5 flex-col isolate aspect-video w-[95%] md:w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5  gap-5 "
      >
        <h2 className="font-semibold text-xl text-center">Admin Login</h2>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            onChange={onChange}
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-secondary"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            onChange={onChange}
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-secondary"
            placeholder="*******"
            required
          />
        </div>
        <div className="flex flex-col text-center space-y-2">
          <button
            disabled={loading}
            type="submit"
            className=" border font-medium rounded-lg text-sm px-5 py-2.5 text-white bg-fairGrey"
          >
            Login
          </button>
          <span className="text-xs text-red-500 h-2">{status}</span>
        </div>
      </form>
    </div>
  );
};

export default Page;
