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
  return (
    <div className="border-solid border-[1.5px] border-[#883B0A29]">
      <Image
        src={profile_image}
        className="aspect-square object-cover"
        alt={`artist ${name}`}
        width={400}
        height={400}
        quality={70}
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
