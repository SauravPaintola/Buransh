"use client";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col  h-screen px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l bg-gray-900 border-gray-700 w-[20%] fixed">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Admin
            </label>

            <Link
              href={"/admin-dashboard"}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <span className="mx-2 text-sm font-medium">Insights</span>
            </Link>
            <Link
              href={"/admin-dashboard"}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
