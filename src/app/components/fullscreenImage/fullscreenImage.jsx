"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import useKeypress from 'react-use-keypress'


function FullscreenImage({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPhoto = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useKeypress('Escape', () => {
    openPhoto()
  })

  return isOpen ? (
    <>
      <Image
        src={src}
        width={728}
        height={480}
        alt="collection poster"
        className="block fixed z-50 inset-0 w-screen h-screen bg-black object-contain"

      />
      <Image
        src="/icons/close_arrow.svg"
        width={40}
        height={40}
        alt="zoom arrow"
        className="block fixed top-3 right-3 z-50"
        onClick={openPhoto}
      />
    </>
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
      <Image
        src="/icons/zoom_arrow.svg"
        width={40}
        height={40}
        alt="zoom arrow"
        className="hidden sm:block absolute top-3 right-3"
        onClick={openPhoto}
      />
    </div>
  );
}

export default FullscreenImage;
