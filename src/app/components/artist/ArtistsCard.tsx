import React from "react";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../common/Text/Paragraph";
import { Artist } from "@/types";

const ArtistsCard = ({
  profile_image,
  id,
  name,
  description,
  total_artwork,
  sold_artwork,
}: Artist) => {
  return (
    <div className="border-solid border-[1.5px] border-[#883B0A29]">
      <Image
        src={profile_image}
        className="aspect-square object-cover"
        alt="artist"
        width={300}
        height={300}
      />
      <div className="flex text-center flex-col mt-5 sm:mt-4 mb-4 gap-3">
        <Paragraph className="font-semibold lg:text-2xl">{name}</Paragraph>
        {/* <Paragraph className="text-[10px] lg:text-sm">{career ?? ""}</Paragraph> */}
        <Link
          href={`/artists/${id}`}
          className="text-primary font-inter px-[36px] mx-auto py-3 border border-primary text-base font-medium hidden sm:block"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ArtistsCard;
