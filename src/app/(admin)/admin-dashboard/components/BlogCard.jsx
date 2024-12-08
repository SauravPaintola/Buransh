import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BlogCard = ({
  title,
  description,
  mainImg,
  region,
  topics,
  createdAt,
  _id,
  onDelete,
  slug
}) => {
  const date = new Date(createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getDescription = () => {
    const parser = new DOMParser();
    const parsedDescription = parser.parseFromString(description, "text/html");
    return parsedDescription.querySelector("p")?.textContent || "";
  };

  return (
    <div
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
          <span className="text-sm lg:text-base">{date}</span>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <h2 className="font-semibold text-xl leading-relaxed truncate   ">
            {title}
          </h2>
          <hr />
          <p className="text-fairGrey text-sm lg:text-base">
            {getDescription()}
          </p>
          <Link href={`/blog/${slug}`} className="flex space-x-1 items-center">
            <span className="text-fairGrey text-sm lg:text-base underline">
              Read More
            </span>
            <PlusCircleIcon className="w-4 lg:w-5  text-green" />
            <TrashIcon
              className="w-4 lg:w-5  text-red-500 cursor-pointer"
              onClick={() => {
                onDelete(_id);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
