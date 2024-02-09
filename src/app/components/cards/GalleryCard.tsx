import React from "react";
import Image from "next/image";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";

interface GalleryCardProps {
  info: {
    id: number;
    name: string;
    artist_name: string;
    size: string;
    status: boolean;
    image: string;
  };
}

const GalleryCard = ({ info }: GalleryCardProps) => {
  const hrefId = info.id.toString();
  return (
    <Link href={`/artworks/${hrefId}`}>
      <div className="relative border p-2">
        <Image
          src={info?.image}
          width={500}
          height={500}
          alt={info?.name}
          priority={true}
          className={
            "w-full bg-indigo-100 object-cover object-center flex items-center justify-center mx-auto"
          }
        />
        <div className="py-8 px-3">
          <h2 className="text-primary text-xl font-semibold mb-4">
            {info?.name}
          </h2>
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="text-xs text-primary mb-2">
                by Artist {info?.artist_name}
              </p>
              <p className="text-xs text-primary leading-tight">{info?.size}</p>
            </div>
            <div
              className={`py-4 px-7 ${
                info?.status ? "bg-success" : "bg-error"
              } text-white text-xs tracking-wider`}
            >
              {info?.status ? "Available" : "Sold out"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
