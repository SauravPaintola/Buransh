"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Card = ({ title, image, className, region }) => {
  return (
    <Link
      href={`/region/${region}/${title.toLowerCase()}`}
      className={`flex flex-col w-96 h-64 relative rounded-xl overflow-hidden shadow-lg group ${className}`}
    >
      <img
        src={image}
        className="w-full h-full object-cover absolute z-0 group-hover:scale-110 transition-all duration-500"
        alt=""
      />
      <div className="bg-black/50 w-full h-full absolute top-0 right-0"></div>
      <div className="flex w-full h-full justify-center items-center z-10 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </Link>
  );
};

const Page = () => {
  const { region } = useParams();

  if (region === "kumaon" || region === "garhwal") {
    return (
      <div className=" flex flex-col w-screen relative">
        <div className="w-full h-[60vh] overflow-hidden  flex justify-center items-center relative  ">
          <div className="bg-black/50 w-full h-full absolute top-0 right-0 z-0"></div>
          <img
            className="w-full h-full object-cover"
            src={`/assets/${region}/background.png `}
            alt=""
          />
          <div className="flex flex-col  justify-center items-center z-10 text-white absolute ">
            <h1 className="text-6xl font-bold">
              Know about the region of {region}
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-5 px-32 place-items-center w-full h-[40%] -translate-y-32 z-30">
          <Card
            region={region}
            title="District"
            image={`/assets/${region}/district.jpg`}
          />
          <Card
            region={region}
            title="Food"
            image={`/assets/${region}/food.jpg`}
          />
          <Card
            region={region}
            title="Culture"
            image={`/assets/${region}/culture.jpg`}
          />
          <Card
            region={region}
            title="Tourism"
            image={`/assets/${region}/tourism.jpg`}
          />
          <Card
            region={region}
            title="Environement"
            image={`/assets/${region}/env.jpg`}
          />
          <Card
            region={region}
            title="Mythological Beliefs"
            image={`/assets/${region}/mythological.jpg`}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center pt-40 h-[70vh] flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-bold">Oops!</h1>
        <h2 className="text-xl"> No such region found</h2>
        <Link href="/" className="bg-green text-white px-5 py-2 rounded">
          Go Back{" "}
        </Link>
      </div>
    );
  }
};

export default Page;
