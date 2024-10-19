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
          blurDataURL={info?.image}
          placeholder="blur"
          className={
            "w-full bg-indigo-100 object-cover object-center flex items-center justify-center mx-auto"
          }
        />

        <div className="flex flex-col-reverse lg:flex-row py-6 px-3 items-start justify-between w-full lg:items-center gap-3">
          <div>
            <h2 className="text-primary text-base lg:text-xl font-semibold lg:mb-4">
              {info?.name}
            </h2>
            <div>
              <p className="text-xs text-primary mb-2">
                by Artist {info?.artist?.name}
              </p>
              <p className="text-xs text-primary leading-tight">{info?.size}</p>
            </div>
          </div>
          <div
            className={`py-1 px-2 text-xs lg:py-3 border-[1.5px] lg:px-7 ${
              info?.sold
                ? "border-error text-error"
                : "border-success text-success"
            } text-xs tracking-wider`}
          >
            {info?.status ? "Sold out" : "Available"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
