import {
  ArchiveBoxArrowDownIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="lg:flex flex-col lg:flex-row justify-between w-screen overflow-hidden max-w-screen py-3 px-5 bg-[#50c878] text-white hidden">
      <div className="flex flex-col lg:flex-row w-full lg:space-x-4">
        <a href="tel:9899455770" className="flex space-x-1">
          <PhoneIcon className="w-5" />
          <span>+91 9899455770</span>
        </a>
        <a
          className="flex space-x-1"
          href="mailto:help.buransh.foundation@gmail.com"
        >
          <EnvelopeIcon className="w-5" />
          <span>help.buransh.foundation@gmail.com</span>
        </a>
      </div>
      <div className="flex w-full items-center space-x-3">
        <Link
          className="flex items-center space-x-1"
          href={"/register"}
        >
          <DocumentCheckIcon className={"w-4"} />
          <span>Volunteer Registration</span>
        </Link>
        <Link className="flex items-center space-x-1" href={"/donate"}>
          <ArchiveBoxArrowDownIcon className={"w-4"} />
          <span>Donate</span>
        </Link>
      </div>
      <div className="flex space-x-4 pr-5">
        <a
          href="https://www.instagram.com/buransh.foundation?igsh=cDJteng2YjhyMjI0"
          target="_blank"
          className="w-5"
        >
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
        </a>
        <a
          href="https://youtube.com/@buranshfoundation?si=w0m0qMzd5BGa5hqB"
          target="_blank"
          className="w-5"
        >
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/ios-filled/50/ffffff/youtube.png"
            alt="twitter"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567103200686&mibextid=ZbWKwL"
          target="_blank"
          className="w-5"
        >
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
            alt="facebook-new"
          />
        </a>
        
      </div>
    </div>
  );
};

export default TopBar;
