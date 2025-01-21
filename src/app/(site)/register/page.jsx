"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const Page = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // To track the status of the email sending process

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pomt1tk", // Replace with your service ID
          "template_qb5ae6j", // Replace with your template ID
          form.current,
          "z-Infhx9FLyO1e8E3" // Replace with your public key
        )
        .then(
          () => {
            setStatus("success"); // Email sent successfully
          },
          () => {
            setStatus("error"); // Failed to send email
          }
        );
    }
  };

  return (
    <section className="bg-white">
      <Head>
        <title>NGO Registration | Buransh Foundation</title>
        <meta
          name="description"
          content="Register with the Buransh Foundation to become a part of our mission to empower the people of Uttarakhand. Provide your details to get involved."
        />
        <meta
          name="keywords"
          content="NGO Registration, Buransh Foundation, Uttarakhand, Volunteer, Empowerment, Community, Education, Registration Form"
        />
        <meta
          property="og:title"
          content="NGO Registration | Buransh Foundation"
        />
        <meta
          property="og:description"
          content="Join the Buransh Foundation by filling out the registration form. Be part of our mission to uplift the people of Uttarakhand."
        />
        <meta
          property="og:url"
          content="https://www.buranshfoundation.in/register" // Replace with the actual registration page URL
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.buranshfoundation.in/logo.jpg" // Replace with an appropriate image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NGO Registration | Buransh Foundation"
        />
        <meta
          name="twitter:description"
          content="Register with the Buransh Foundation and become a volunteer in our mission to make a difference in Uttarakhand."
        />
        <meta
          name="twitter:image"
          content="https://www.buranshfoundation.in/logo.jpg" // Replace with an appropriate image URL
        />
      </Head>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {status === "success" ? (
          <div className="text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Registration Successful!
            </h2>
            <p className="mb-8 text-lg font-light text-gray-500 sm:text-xl">
              Thank you for registering with us. We will get in touch soon.
            </p>
          </div>
        ) : status === "error" ? (
          <div className="text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-red-600">
              Oops!
            </h2>
            <p className="mb-8 text-lg font-light text-gray-500 sm:text-xl">
              There was an issue with your registration. Please try again.
            </p>
          </div>
        ) : (
          <>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              NGO Registration Form
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Register yourself with our NGO. Provide the necessary details
              below.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Match this to your EmailJS template variable
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="user_number" // Match this to your EmailJS template variable
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+1234567890"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="user_district" // Match this to your EmailJS template variable
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="District Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email" // Match this to your EmailJS template variable
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="yourname@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Register
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
