import React from "react";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../common/Text/Paragraph";
import { Artist } from "@/types";

const ArtistsCard = ({ image, id, name, career }: Artist) => {
  return (
    <>
      <Image
        src={image}
        className="aspect-square w-auto h-auto"
        alt="artist"
        width={300}
        height={300}
      />

      <div className="flex text-center flex-col mt-5 lg:mt-9 ">
        <Paragraph className="font-semibold lg:text-2xl">{name}</Paragraph>
        <Paragraph className="text-[10px] lg:text-sm">{career}</Paragraph>
        <Link
          href={`/artists/${id}`}
          className="text-primary font-inter mt-5 px-[36px] mx-auto py-3 border border-primary text-base font-medium hidden lg:block"
        >
          View Profile
        </Link>
      </div>
    </>
  );
};

export default ArtistsCard;
