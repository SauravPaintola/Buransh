"use client";
import { useState, useEffect } from "react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "“सशक्त समाज सम्पन्न उत्तराखंड”",
    description:
      "Buransh Foundation welcomes everyone to a beautiful journey through Uttarakhand. Uttarakhand at a glance is a land of the Gods, home to love, warmth, and rich cultural heritage, unmatched natural beauty. But..is this beauty.",
    variant: "slide1",
  },
  {
    title:
      "जैते-जैते छन सांस्कृतिक रीत, गढ़वाल-कुमाऊं की धड़कण ये जीत। ",
    description:
      "We convey a love for the journey of traditions in Garhwal-Kumaon, celebrating the heart and spirit of these regions' cultural richness. ",
    variant: "slide2",
  },
  {
    title: "🌿 सरसराती हवा, ठंडा पानी,पक गए बेड़ू, काफल की दानी। धार माटी कु मान, पन्याळा कु संमान! 🌿",
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
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-transparent">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          className="relative z-20 flex flex-col h-full justify-center w-full lg:w-[50%] text-white space-y-3 p-3 lg:p-20"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants[slidesContent[activeIndex].variant]}
        >
          <div className="flex items-center space-x-1">
            <GlobeAsiaAustraliaIcon className="w-4 text-green" />
            <p className="text-green text-sm font-semibold">
              🌺 THE BURANSH FOUNDATION 🌺
            </p>
          </div>
          <motion.h1 className="text-4xl lg:text-7xl font-bold">
            {slidesContent[activeIndex].title}
          </motion.h1>
          <motion.p className="text-sm lg:text-base">
            {slidesContent[activeIndex].description}
          </motion.p>
          <motion.div className="flex space-x-4" variants={buttonVariants}>
            <button className="text-green bg-white py-3 px-10 rounded hover:bg-green hover:text-white transition-all">
              Explore
            </button>
            <button className="bg-transparent hover:bg-green text-green hover:text-white py-3 px-10 rounded transition-all border">
              Read More
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
