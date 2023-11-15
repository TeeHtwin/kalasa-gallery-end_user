"use client";
// components/PhotoGallery.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PhotoGalleryProps {
  images: string[];
}

interface ImageDimensions {
  width: number;
  height: number;
}

const getDimensionsFromUrl = (url: string): ImageDimensions | null => {
  const match = url.match(/\/(\d+)\/(\d+)$/);
  if (match) {
    const [, width, height] = match.map(Number);
    return { width, height };
  }
  return null;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([]);

  useEffect(() => {
    const dimensions = images.map(getDimensionsFromUrl);
    setImageDimensions(
      dimensions.filter((dim) => dim !== null) as ImageDimensions[]
    );
  }, [images]);

  return (
    <div className="container mx-auto p-4 columns-2 gap-x-10 lg:columns-3 w-full">
      {images.map((image, index) => {
        const dimensions = imageDimensions[index];
        return (
          dimensions && (
            <div key={index} className="mb-4 w-full">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-xl"
                width={dimensions.width}
                height={dimensions.height}
              />
            </div>
          )
        );
      })}
    </div>
  );
};

export default PhotoGallery;
