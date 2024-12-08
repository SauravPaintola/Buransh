"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Counter from "../components/Counter/Counter";

const Page = () => {
  return (
    <div className="flex flex-col w-screen h-full lg:pt-10">
      <div className=" flex relative w-screen h-[400px]">
        <Image
          src={"/assets/kumaon/env.jpg "}
          alt={"about"}
          fill
          className={"object-cover"}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full  lg:px-20 p-2">
        <div className="flex flex-col w-full lg:w-[50%]">
          <div className="flex -translate-y-48 lg:-translate-y-7 justify-center items-center h-20 lg:w-96  z-10 bg-green text-white font-bold text-2xl lg:text-3xl">
            <span>About Buransh Foundation</span>
          </div>
          <div className="flex flex-col space-y-3 text-lg w-full">
            <p>The Buransh Foundation: Preserving the Spirit of Uttarakhand</p>
            <p>
              Over the coming years, The Buransh Foundation aims to establish
              itself as a pivotal force for the recognition and conservation of
              Uttarakhand&apos;s identity. By combining community-driven
              initiatives with strategic interventions, we strive to ensure that
              every element defining the state&apos;s essence is preserved for
              future generations.
            </p>
            <h1 className="font-bold">Why Buransh?</h1>
            <p>
              The foundation derives its name from the iconic Buransh
              (Rhododendron arboreum) flower, a symbol of vitality and
              resilience native to Uttarakhand. Like this vibrant flower, we aim
              to thrive in challenging terrains while contributing positively to
              the environment and society. The Buransh Foundation sustains
              Uttarakhand's legacy
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-16 lg:pt-0 lg:p-20 lg:px-32 w-full lg:w-[50%] lg:space-y-5">
          <p className=" lg:text-lg font-semibold">Overview</p>
          <h2 className="text-3xl lg:text-5xl font-bold">About Us</h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#eeeff1] lg:px-20 py-20 mt-10 justify-center items-center space-y-10">
        <div className="flex flex-col space-y-5 justify-center items-center p-1">
          <div>
            <h2 className="text-4xl font-bold text-center ">
              आप सभी का पहाड़ों में स्वागत है।
            </h2>
            <p className="text-2xl font-bold text-center t mb-2">
              “MOUNTAINS WELCOME YOU ALL”
            </p>
          </div>
          <p className="text-lg text-center">
            We are here to save the environment. Through Buransh Foundation, we
            protect traditions, promote education, and uplift communities,
            supporting the people, heritage, and natural beauty of Uttarakhand.
            We work to restore Uttarakhand&apos;s green spaces through tree
            planting and community clean-up drives. By raising environmental
            awareness and encouraging students to get involved, we aim to build
            a cleaner, greener, and more sustainable future.
          </p>
        </div>
        <Link href={"/blogs"}>
          <h2 className=" bg-green hover:bg-transparent hover:shadow-md hover:text-green transition-all px-5 py-3 self-center w-fit rounded-full  text-white font-medium hover:border">
            Check Out Our Work
          </h2>
        </Link>
        <div className="flex flex-col lg:flex-row w-full p-1 space-y-10 lg:space-y-0">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h2 className="text-5xl font-bold">Our</h2>
            <h2 className="text-5xl font-bold text-green">Insights</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center  w-full space-y-3 lg:space-y-0 lg:space-x-10">
            <div className="flex space-x-5">
              <h2 className="font-bold text-4xl text-black text-center">
                <Counter value={50} direction="up" />+
              </h2>
              <h2 className="font-bold text-4xl text-black text-center">
                Donors
              </h2>
            </div>
            <span className="bg-[#cacaca] w-[2px] h-full "></span>
            <div className="flex space-x-5">
              <h2 className="font-bold text-4xl text-black text-center">
                <Counter value={100} direction="up" />+
              </h2>
              <h2 className="font-bold text-4xl text-black text-center">
                Members
              </h2>
            </div>
            <span className="bg-[#cacaca] w-[2px] h-full "></span>

            <div className="flex space-x-5">
              <h2 className="font-bold text-4xl text-black text-center">
                <Counter value={50} direction="up" />+
              </h2>
              <h2 className="font-bold text-4xl text-black text-center">
                Volunteers
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full  lg:px-20 py-20 p-2">
        <div className="flex flex-col w-full lg:w-[40%] space-y-10">
          <h2 className="text-4xl font-bold">
            We hustle to count more events <br /> with our foundation
          </h2>
          <div className="flex flex-col space-y-3 text-lg w-full">
            <p>
              The Buransh Foundation is a very new journey and a very new step.
              The focus of the foundation is UTTARAKHAND. Every element that
              surrounds us needs identification and preservation of its essence.
              Mountains, temples, places, food, cultural heritage and
              mythological beliefs have their own essence.
            </p>
            <p>
              From the towering mountains and sacred temples to the rich flavors
              of its cuisine, vibrant cultural heritage, and profound
              mythological beliefs, each element has its own story to tell—its
              own essence to protect.
            </p>
            <p>
              Our vision is to embark on countless efforts in the coming years,
              driven by passion and purpose. Together, we aim to create a
              meaningful impact, fostering a deep connection to the treasures of
              Uttarakhand for generations to come.
            </p>
            <p className="font-semibold">
              Let&apos;s nurture the beauty around us, one step at a time.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-16 lg:pt-0 lg:p-20 lg:px-32 w-full lg:w-[60%] lg:space-y-5">
          <iframe
            width="700"
            height="400"
            className="w-full h-full lg:w-[700px] lg:h-[400px]"
            src="https://www.youtube.com/embed/T3oq1ccmcP4"
            title="Thalaivaa (HD) - Thalapathy Vijay Blockbuster Hindi Dubbed Movie | Amala Paul, Sathyaraj"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
