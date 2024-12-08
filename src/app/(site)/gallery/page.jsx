"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// CustomImage Component to handle image display with lazy loading
const CustomImage = ({ src, alt, caption, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative group transition-all w-full md:w-auto h-72 overflow-hidden rounded-lg cursor-pointer"
    >
      <Image
        src={src}
        alt={alt || "Gallery Image"}
        width={1000}
        height={1000}
        className="rounded-lg w-full h-full object-cover"
        loading="lazy"
      />
      {caption && (
        <div className="text-center text-sm text-white p-1 absolute bottom-0 bg-black/50 w-full invisible group-hover:visible transition-all">
          {caption}
        </div>
      )}
    </div>
  );
};

// Skeleton image component for loading state
const SkeletonImage = () => (
  <div className="animate-pulse bg-gray-300 w-auto h-72 rounded-lg" />
);

const Page = () => {
  const [images, setImages] = useState(null); // null for initial loading state
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setImages(data.length ? data : []); // Set empty array if no images
      } catch (err) {
        setError("Could not load images. Please try again later.");
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="flex flex-col p-3 justify-center items-center lg:p-20 lg:pt-40 space-y-10">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold lg:text-5xl text-center">Gallery</h1>
        <p className="text-center">Read more about our journey and our work.</p>
      </div>

      {/* Content display based on loading, error, or image availability */}
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : images === null ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonImage key={index} />
          ))
        ) : images.length === 0 ? (
          <p className="text-gray-500 text-center">No images available.</p>
        ) : (
          images.map((image, index) => (
            <CustomImage
              key={index}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              onClick={() => handleImageClick(image)}
            />
          ))
        )}
      </div>

      {/* Modal for displaying the enlarged image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden">
          <div className="relative">
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={modalImage.src}
              alt={modalImage.alt || "Enlarged Image"}
              width={800}
              height={600}
              className="rounded-lg"
            />
            {modalImage.caption && (
              <div className="text-center text-white text-lg p-2 bg-black/50 mt-2 rounded-lg">
                {modalImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
