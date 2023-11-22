"use client";
import React, { useState } from "react";
import popupCloseIcon from "@/../public/icons/popupCloseIcon.svg";
import closeIcon from "../../../../public/icons/close.svg";
import Image from "next/image";

const ImagePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const togglePopup = (image) => {
    setShowPopup(!showPopup);
    setSelectedImage(image);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <img
          className="cursor-pointer"
          src="https://via.placeholder.com/600"
          alt="Image"
          onClick={() => togglePopup("https://via.placeholder.com/200")}
        />
        {showPopup && (
          <div className=" fixed top-0 right-0 z-10 w-screen h-screen bg-black flex items-center  justify-center">
            <div className=" p-2 rounded shadow-lg">
              <img
                className="h-[86vh] w-auto"
                src={selectedImage}
                alt="Selected Image"
              />
            </div>
            <Image
              width={32}
              height={32}
              alt="close icon"
              src={popupCloseIcon}
              className="absolute bg-black fill-primary p-4 rounded-full top-16 right-16 z-50"
              onClick={closePopup}
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
