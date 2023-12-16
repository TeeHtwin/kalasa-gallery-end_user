import React from "react";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../../common/Text/Paragraph";
import LinkBtn from "../../button/LinkBtn";

interface ArtistsCardProps {
  src: string;
  href: string;
  name: string;
  job: string;
}
const ArtistsCard = ({ src, href, name, job }: ArtistsCardProps) => {
  return (
    <>
      <Image
        src={src}
        className="aspect-square w-full h-auto"
        alt="artist"
        width={300}
        height={300}
      />

      <div className="flex text-center flex-col mt-5 lg:mt-9 ">
        <Paragraph className="font-semibold lg:text-xl">{name}</Paragraph>
        <Paragraph className="opacity-70">{job}</Paragraph>
        <Link
          href={href}
          className="text-primary font-inter mt-5 px-[36px] mx-auto py-1.5 border border-primary text-base font-medium hidden lg:block"
        >
          View Profile
        </Link>
      </div>
    </>
  );
};

export default ArtistsCard;
