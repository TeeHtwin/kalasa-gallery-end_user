import React from "react";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../common/Text/Paragraph";
import { Artist } from "@/types";
import LinkBtn from "../button/LinkBtn";

const ArtistsCard = ({
  profile_image,
  id,
  name,
  description,
  total_artwork,
  sold_artwork,
}: Artist) => {
  const imageSrc =
    profile_image && profile_image.length > 0
      ? profile_image
      : "/img/smallBackground.jpeg";
  const isApiImage =
    typeof imageSrc === "string" &&
    imageSrc.startsWith("https://api.kalasa.gallery/");
  return (
    <div className="border-solid border-[1.5px] border-[#883B0A29]">
      <Image
        src={imageSrc}
        className="aspect-square object-cover"
        alt="artist"
        width={400}
        height={400}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        unoptimized={isApiImage}
      />
      <div className="flex text-center flex-col mt-5 sm:mt-4 mb-4 gap-3">
        <Paragraph className="font-semibold lg:text-2xl">{name}</Paragraph>
        <LinkBtn
          href={`/artists/${id}`}
          mobileText="View Profile"
            dtText="View Profile"
          className="text-primary font-inter px-4 mx-auto py-2 border border-primary text-base font-medium hidden sm:block no-underline"
        />
        
      </div>
    </div>
  );
};

export default ArtistsCard;
