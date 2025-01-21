"use client";
import React from "react";
import HeroBackground from "./components/Slides/HeroBackground";
import {
  BeakerIcon,
  CameraIcon,
  CheckBadgeIcon,
  GlobeAsiaAustraliaIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogCard from "./components/Card/BlogCard";
import Testimonials from "./components/Slides/Testimonials";
import { useEffect, useState } from "react";
import BlogCardSkeleton from "./components/Card/BlogCardSkleton";
import axios from "axios";
import Map from "./components/Slides/Map";
import Link from "next/link";
const Page = () => {
  const [blogData, setBlogData] = useState(null);
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blog");
      console.log("API Response:", res.data);
      setBlogData(res.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen flex flex-col w-screen">
      <div
        id="heroSection"
        className="flex justify-between items-center h-screen w-screen relative overflow-hidden "
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
        <HeroBackground />
        {/* <div className="flex flex-col h-screen justify-center w-full lg:w-[50%] z-10 text-white space-y-3 p-3 lg:p-20 animate-container">
          <div className="flex items-center space-x-1">
            <GlobeAsiaAustraliaIcon className="w-4 text-green" />
            <p className="text-green text-sm font-semibold">
              The Buransh Foundation
            </p>
          </div>
          <h1 className=" text-4xl lg:text-7xl font-bold animate-slideInRight text-white">
            Know the Culture <br /> Of the <br /> Uttarakhand{" "}
          </h1>
          <p className="animate-fadeInDelay text-sm lg:text-base">
            Discover Uttarakhand&apos;s rich heritage and traditions—our mission is
            to preserve, educate, and celebrate the vibrant culture of this
            beautiful region.
          </p>
          <div className="flex space-x-4">
            <button className="text-green bg-white py-3 px-10 rounded hover:bg-green hover:text-white transition-all animate-slideInBottom text-sm lg:text-base">
              Explore
            </button>
            <button className="bg-transparent hover:bg-green text-green hover:text-white py-3 px-10 rounded transition-all border animate-slideInBottom text-sm lg:text-base">
              Read More
            </button>
          </div>
        </div> */}

        <div className=""></div>
      </div>
      {/* About Section */}
      <div className="flex flex-col lg:flex-row  lg:justify-center w-full min-h-screen items-center lg:space-x-10 py-10 ">
        <div className="lg:w-[35%] w-full rounded-lg overflow-hidden p-5">
          <img className="h-full w-full " src="/assets/buranshgif.gif" alt="" />
        </div>
        <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-3 p-3">
          <div className="flex items-center space-x-1">
            <GlobeAsiaAustraliaIcon className="w-4 text-green" />
            <p className="text-green text-sm font-semibold">Our mission</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Know the culture,
            <br /> Save the culture
          </h2>
          <p className="text-fairGrey">
            Before trying to protect and take a step towards something. We are
            responsible to know the roots of it for ourselves as well. Our
            website will be the online vision of UTTARAKHAND. We would try to
            put all of the information that we can, and that we understand. We
            will make you familiar with the districts, food, culture, travel,
            environment and mythological beliefs of Uttarakhand . Our offline
            face is the traditional art of bringing a union together to help the
            men, women and children of their area to gain experience in
            different fields like theatre, folk music, folk art, culture and soo
            much more.
          </p>
          <div className="flex space-x-4 bg-green/10 py-3 px-1 rounded-lg relative overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-green -bottom-3 right-5  absolute">
              {/* Rounded Dot on right conrner */}
            </div>
            <div className="w-14 h-14 rounded-md overflow-hidden">
              <img className="w-full h-full" src="/background/bg1.png" alt="" />
            </div>
            <div className="flex flex-col ">
              <img className="w-5" src="/assets/quotes.png" alt="" />
              <p className="text-sm text-fairGrey">
                Lets make the world a better place for all.
              </p>
            </div>
          </div>
          <div id="aims" className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <CheckBadgeIcon className="w-5 text-green" />
              <span className="text-sm font-semibold">Know the culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckBadgeIcon className="w-5 text-green" />
              <span className="text-sm font-semibold">Save the culture</span>
            </div>
          </div>
          <button className="w-fit px-6 py-2 text-white rounded-md bg-green text-sm lg:text-base">
            Show Blogs
          </button>
        </div>
      </div>
      {/* Gallery Section */}
      {/* <div
        id="gallery"
        className="w-full justify-center  min-h-screen bg-green/10 flex flex-col lg:flex-row p-3 lg:p-20 gap-5"
      >
        <div className="flex flex-col space-y-3">
          <div className="flex  items-center space-x-1">
            <CameraIcon className="w-4 text-green" />
            <p className="text-green text-sm font-semibold">About us</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Things Uttarakhand <br />
            is famous for.
          </h2>
          <div className="flex flex-col gap-5">
            <div className="w-full h-[300px] lg:min-w-[500px] lg:min-h-[500px] lg:max-w-[500px] lg:max-h-[500px] overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-lg"
                width={1000}
                height={1000}
                src={"/background/bg1.png"}
              />
            </div>
            <div className=" w-full h-[350px] lg:min-w-[500px] lg:min-h-[600px] lg:max-w-[500px] lg:max-h-[600px] overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-lg"
                width={1000}
                height={1000}
                src={"/background/bg1.png"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-full h-[300px] lg:min-w-[500px] lg:min-h-[600px] lg:max-w-[500px] lg:max-h-[600px] overflow-hidden">
            <Image
              className="w-full h-full object-cover rounded-lg"
              width={1000}
              height={1000}
              src={"/background/bg1.png"}
            />
          </div>
          <div className="w-full h-[350px] lg:min-w-[500px] lg:min-h-[500px] lg:max-w-[500px] lg:max-h-[500px] overflow-hidden">
            <Image
              className="w-full h-full object-cover rounded-lg"
              width={1000}
              height={1000}
              src={"/background/bg1.png"}
            />
          </div>
          <div
            className="
          w-full h-full flex justify-end items-end"
          >
            <button className="bg-green w-fit py-3 px-8 text-white rounded-md font-semibold flex justify-center items-center space-x-1">
              <span className="text-sm lg:text-base">See More</span>
              <ArrowRightIcon className="w-4 lg:w-5 mt-[1px]" />
            </button>
          </div>
        </div>
      </div> */}
      {/* Map */}

      <Map />

      {/* Testimonials */}

      <Testimonials />

      {/* Blog Section */}
      <div
        id="blog"
        className="w-full  min-h-screen flex flex-col p-3 lg:p-20 gap-10"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-5 lg:space-y-0 lg:items-center">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1">
              <NewspaperIcon className="w-4 text-green" />
              <p className="text-green text-sm font-semibold">Blog & News</p>
            </div>
            <h1 className="font-bold text-4xl lg:text-5xl">
              Read Latest News <br /> & Blog
            </h1>
          </div>
          <Link href={'/blog'} className="bg-green w-fit py-3 px-8 text-white rounded-md font-semibold flex justify-center h-fit space-x-2 items-center text-sm lg:text-base">
            View More
            <ArrowRightIcon className="w-4 lg:w-5 ml-1" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          {blogData === null ? (
            <div className="animate-pulse">
              <BlogCardSkeleton />
            </div>
          ) : (
            blogData
              .slice(-3)
              .map((data) => <BlogCard key={data.id} {...data} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
