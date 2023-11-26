"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function FullscreenImage({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPhoto = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);


  return isOpen ? (
    <Image
      src={src}
      width={728}
      height={480}
      alt="collection poster"
      className="block absolute z-50 top-0 left-0 w-screen h-screen bg-contain bg-no-repeat bg-center bg-black object-contain"
      onClick={openPhoto}
    />
  ) : (
    <div className="object-cover w-full relative">
      <Image
        src={src}
        width={600}
        height={400}
        alt="collection poster"
        className="object-cover w-full"
        onClick={openPhoto}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute top-0 right-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    </div>
  );
}

export default FullscreenImage;
