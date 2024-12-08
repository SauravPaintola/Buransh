import Link from "next/link";
import React, { useState } from "react";

const Map = () => {
  const [hoverRegion, setHoverRegion] = useState(null);

  const handleMouseEnter = (region) => {
    setHoverRegion(region);
  };

  const handleMouseLeave = () => {
    setHoverRegion(null);
  };

  return (
    <div className="flex justify-center items-center w-screen h-[50vh] overflow-hidden">
      <div className="relative">
        {/* Main Uttarakhand Map */}
        <img
          className={`opacity-100 w-full h-full object-cover pointer-events-none ${
            hoverRegion === null ? "opacity-100" : "opacity-0"
          }`}
          src="/assets/uttarakhand.png"
          alt="Uttarakhand"
        />

        {/* Kumaon Region - Hover Area */}
        <Link
          href={"/region/kumaon"}
          className="absolute bottom-3 right-2 w-96 z-20"
          onMouseEnter={() => handleMouseEnter("kumaon")}
          onMouseLeave={handleMouseLeave}
          style={{ pointerEvents: "auto" }} // Ensures hover is detected only within Kumaon region
        >
          <img
            className={`transition-all duration-300 ${
              hoverRegion === "kumaon" ? "opacity-100" : "opacity-0"
            }`}
            src="/assets/kumaon.png"
            alt="Kumaon"
          />
        </Link>

        {/* Garhwal Region - Hover Area */}
        <Link
          href={"/region/garhwal"}
          className="absolute top-7 left-5 w-96"
          onMouseEnter={() => handleMouseEnter("garhwal")}
          onMouseLeave={handleMouseLeave}
          style={{ pointerEvents: "auto" }} // Ensures hover is detected only within Garhwal region
        >
          <img
            className={`transition-all duration-300 scale-105 ${
              hoverRegion === "garhwal" ? "opacity-100" : "opacity-0"
            }`}
            src="/assets/garhwal.png"
            alt="Garhwal"
          />
        </Link>
      </div>
    </div>
  );
};

export default Map;
