"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DonatePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDonateClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  // Example usage

  return (
    <div className="flex flex-col lg:flex-row w-screen min-h-screen lg:pr-0 lg:p-20 justify-center items-center pt-28">
      <div className="lg:w-[40%] flex flex-col space-y-5 p-3">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Give Back to the Himalayas
        </h1>
        <p className="text-sm lg:text-base">
          Uttarakhand has been serving fresh air, water and soil for years.
          People have been protecting culture for years. Now it&apos;s our time to
          donate for the events that need our special attention.
        </p>
        <p className="text-sm lg:text-base">
          Your donation helps us bring education, empowerment, and
          sustainability to the people of Uttarakhand. Join us in creating
          lasting change.
        </p>
        <div className="flex space-x-5">
          <button
            className="px-10 py-3 rounded bg-black text-white text-sm"
            onClick={handleDonateClick}
          >
            Donate
          </button>
          <Link href={'/'} className="px-10 py-3 rounded border border-black text-sm ">
            Explore
          </Link>
        </div>
      </div>
      <div className="lg:w-[60%] flex justify-center items-center relative overflow-hidden">
        <Image
          src={"/assets/uttarakhandmask.png"}
          width={1000}
          height={1000}
          className="w-[700px]"
        />
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 justify-center items-center flex">
          <div className="bg-white w-96 rounded p-10 flex flex-col items-center space-y-2">
            <Image src={"/assets/logo.png"} height={100} width={100} />
            <h2 className="text-2xl font-bold">Donate</h2>
            <p className="text-lg">
              Scan the QR code or click on the link to donate.
            </p>
            <div className="flex justify-center">
              <Image
                src={"/assets/paymentqr.jpg"}
                width={200}
                height={200}
                className="w-[200px]"
              />
            </div>

            <button
              className="px-10 py-3 rounded bg-black text-white"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonatePopup;
