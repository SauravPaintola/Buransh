"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const Page = () => {
  const form = useRef(null); // Reference to the form
  const [status, setStatus] = useState(""); // State to track email status

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (form.current) {
      emailjs
        .sendForm(
          "service_pomt1tk", // Replace with your service ID
          "template_pvnlk0i", // Replace with your template ID
          form.current,
          "z-Infhx9FLyO1e8E3" // Replace with your public key
        )
        .then(
          () => {
            setStatus("success"); // Email sent successfully
            form.current.reset(); // Reset the form
          },
          () => {
            setStatus("error"); // Failed to send email
          }
        );
    }
  };

  return (
    <div className="py-32">
      <Head>
        <title>Contact Us | Buransh Foundation</title>
        <meta
          name="description"
          content="Get in touch with the Buransh Foundation for inquiries, collaborations, and opportunities. We're here to help and engage with you."
        />
        <meta
          name="keywords"
          content="Buransh Foundation, Contact Us, Non-Profit Organization, Uttarakhand, Get in Touch, Collaborations, Opportunities, Email Form, Google Maps"
        />
        <meta property="og:title" content="Contact Us | Buransh Foundation" />
        <meta
          property="og:description"
          content="Reach out to the Buransh Foundation for inquiries and collaborations. Find us on the map and send a message directly through our contact form."
        />
        <meta
          property="og:url"
          content="https://www.buranshfoundation.in/contact"
        />
        <meta
          property="og:image"
          content="https://www.buranshfoundation.in/logo.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Buransh Foundation" />
        <meta
          name="twitter:description"
          content="Reach out to the Buransh Foundation for inquiries and collaborations."
        />
        <meta
          name="twitter:image"
          content="https://www.buranshfoundation.in/logo.jpg"
        />
      </Head>
      <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white font-[sans-serif] max-md:before:hidden">
        <div>
          <h2 className="text-gray-800 text-3xl lg:text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
                />
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
              />
              <textarea
                name="message"
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-green hover:bg-green/50 transition-all text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Send Message
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-500">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500">Failed to send the message!</p>
          )}

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            {/* Contact info */}
          </ul>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.045522228959!2d80.2300401!3d29.6023629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a125001b802ac5%3A0x36bc42e867fc5d09!2sBuransh%20Foundation%20Office!5e0!3m2!1sen!2sin!4v1736844836099!5m2!1sen!2sin"
            title="Google Maps Location"
            className="w-full h-[500px] rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
