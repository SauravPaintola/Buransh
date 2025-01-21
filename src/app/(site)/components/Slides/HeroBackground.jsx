"use client";
import { useState, useEffect } from "react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Define animation variants for each slide
const textVariants = {
  slide1: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
  slide2: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  },
  slide3: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const slidesContent = [
  {
    title: (
      <div>
        <span className="text-4xl lg:text-7xl font-bold">“सशक्त समाज</span>
        <br />
        <span className="text-4xl lg:text-7xl font-bold">
          &nbsp;सम्पन्न&nbsp;उत्तराखंड”
        </span>
      </div>
    ),
    description:
      "Buransh Foundation welcomes everyone to a beautiful journey through Uttarakhand. Uttarakhand at a glance is a land of the Gods, home to love, warmth, and rich cultural heritage, unmatched natural beauty. But..is this beauty getting lost in psithurism.",
    variant: "slide1",
  },
  {
    title: (
      <div className="flex flex-col gap-1">
        <span className="text-3xl lg:text-7xl font-bold ">
          जैते-जैते&nbsp;छन&nbsp;सांस्कृतिक&nbsp;रीत,&nbsp;
        </span>
        <br />
        <span className="text-3xl lg:text-7xl font-bold ">
          गढ़वाल-कुमाऊं&nbsp;की&nbsp;धड़कण&nbsp;ये&nbsp;जीत
        </span>
      </div>
    ),
    description:
      "We convey a love for the journey of traditions in Garhwal-Kumaon, celebrating the heart and spirit of these regions' cultural richness. ",
    variant: "slide2",
  },
  {
    title: (
      <div className="flex flex-col  gap-5 ">
        <span className="text-3xl lg:text-6xl font-bold w-full">
          सरसराती&nbsp;हवा,&nbsp;ठंडा&nbsp;पानी,
        </span>
        <span className="text-3xl lg:text-6xl font-bold ">
         पक&nbsp;गए&nbsp;बेड़ू,काफल&nbsp;की&nbsp;दानी।&nbsp;
        </span>
        <span className="text-3xl lg:text-6xl font-bold ">
          धार&nbsp;माटी&nbsp;कु&nbsp;मान, पन्याळा&nbsp;कु&nbsp;संमान!&nbsp;
        </span>
      </div>
    ),
    description:
      "Join us in celebrating the vibrant festivals that showcase the rich cultural tapestry of Uttarakhand.",
    variant: "slide3",
  },
];

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
    }, 10000); // change slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-transparent">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          className="relative z-20 flex flex-col h-full justify-center w-full lg:w-full text-white space-y-6 p-3 lg:p-20"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants[slidesContent[activeIndex].variant]}
        >
          <div className="flex items-center space-x-1">
            <GlobeAsiaAustraliaIcon className="w-4 text-green" />
            <p className="text-green text-sm font-semibold">
              THE BURANSH FOUNDATION
            </p>
          </div>
          <motion.div className="w-full gap-5">
            {slidesContent[activeIndex].title}
          </motion.div>
          <motion.p className="text-sm lg:text-base lg:w-[60%] flex space-y-5 gap-5">
            {slidesContent[activeIndex].description}
          </motion.p>
          <motion.div className="flex space-x-4" variants={buttonVariants}>
            <Link
              href="/blog"
              className="text-green bg-white py-3 px-10 rounded hover:bg-green hover:text-white transition-all"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="bg-transparent hover:bg-green text-green hover:text-white py-3 px-10 rounded transition-all border"
            >
              Read More
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
