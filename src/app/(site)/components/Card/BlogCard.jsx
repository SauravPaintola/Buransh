import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({
  title,
  description,
  mainImg,
  region,
  topics,
  createdAt,
  _id,
  slug,
}) => {
  const getDescription = () => {
    const parser = new DOMParser();
    const parsedDescription = parser.parseFromString(description, "text/html");
    const text = parsedDescription.querySelector("p")?.textContent || "";
    return text.trim().replace(/\s*\[\.\.\.\]\s*$/, "");
  };
  return (
    <Link
      href={`/blog/${slug}`}
      title={title}
      className=" flex flex-col gap-2 h-full shadow-md p-3 rounded-lg"
    >
      <div className="w-full h-[211px] lg:h-[311px] overflow-hidden rounded-lg relative">
        <div className="bg-green text-xs bottom-2 right-2 absolute py-1 px-2 rounded">
          <span className="text-white font-semibold">{region}</span>
        </div>
        <Image
          className="w-full h-full object-cover"
          width={1500}
          height={1500}
          src={mainImg}
        />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex text-fairGrey">
          <span className="text-sm lg:text-base">
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <h2 className="font-semibold text-xl lg:text-2xl leading-relaxed truncate   ">
            {title}
          </h2>
          <hr />
          <p className="text-fairGrey text-sm lg:text-base">
            {getDescription()}
          </p>
          <div className="flex space-x-1 items-center">
            <span className="text-fairGrey text-sm lg:text-base underline">
              Read More
            </span>
            <PlusCircleIcon className="w-4 lg:w-5  text-green" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
