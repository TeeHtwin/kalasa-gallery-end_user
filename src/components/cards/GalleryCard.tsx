import React from "react";
import Image from "next/image";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";
import { Artwork } from "@/types";

const GalleryCard = ({ info }: { info: Artwork }) => {
  const hrefId = info.id;
  return (
    <Link href={`/artworks/${info?.id}`}>
      <div className="relative break-inside-avoid border p-2">
        <Image
          src={info?.image}
          width={300}
          height={300}
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
              className={`py-3 border-[1.5px] px-7 ${
                info?.status
                  ? "border-success text-success"
                  : "border-error text-error"
              } text-xs tracking-wider`}
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
