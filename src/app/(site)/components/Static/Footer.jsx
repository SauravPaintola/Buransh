"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const LINKS = [
  {
    title: "About Us",
    items: [
      { text: "About Us", href: "/about" },
      { text: "Our Vision and Mission", href: "/about#mission" },
      {
        text: "Inspiration – The Story of Hope",
        href: "/story",
      },
    ],
  },
  {
    title: "Our Work",
    items: [
      { text: "Our Events", href: "/gallery" },
      { text: "Explore Our Culture Kumaon", href: "/region/kumaon" },
      { text: "Explore Our Culture Garhwal", href: "/region/garhwal" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { text: "Online Donations", href: "/donate" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full py-5 border-t">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <Image
              className="w-40"
              width={100}
              height={100}
              src="/assets/logo.png"
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map(({ text, href }) => (
                  <li key={text}>
                    <Typography
                      as="a"
                      href={href}
                      color="gray"
                      className="py-1.5 text-sm transition-colors hover:text-blue-gray-900"
                    >
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-center">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Buransh Foundation</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
