"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function NavList() {
  return (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors text-white"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/about"
          className="flex items-center hover:text-blue-500 transition-colors text-white"
        >
          Buransh Foundation(Goal)
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/about"
          className="flex items-center hover:text-blue-500 transition-colors text-white"
        >
          Events
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/gallery"
          className="flex items-center hover:text-blue-500 transition-colors text-white"
        >
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/gallery"
          className="flex items-center hover:text-blue-500 transition-colors text-white"
        >
          Contact
        </Link>
      </Typography>
      {/* <Link
        href={"/contact"}
        className="bg-green px-3 rounded-md
       py-2"
      >
        Contact Us
      </Link> */}
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const urlIsNotHome = pathname !== "/";

  const handleWindowScroll = () =>
    window.scrollY > 5 ? setScrolled(true) : setScrolled(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center fixed  z-50 w-full
       ${
         scrolled || urlIsNotHome ? "bg-black top-0" : "bg-transparent"
       } transition-all`}
    >
      <Navbar color="transparent" className=" px-6 py-5 w-full">
        <div className="flex items-center justify-between text-white">
          <Link
            as="a"
            href="/"
            className="mr-4 cursor-pointer"
          >
            <Image className="w-14" width={100} height={100} src="/assets/logomini.png" alt="" />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
