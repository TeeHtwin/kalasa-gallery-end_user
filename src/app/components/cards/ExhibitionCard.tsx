import Image from "next/image";
import React from "react";
import TitleInter from "../common/Text/TitleInter";
import Paragraph from "../common/Text/Paragraph";
import LinkBtn from "../button/LinkBtn";

export interface ExhibitionCardProps {
  src: string;
  title: string;
  date: string;
  place: string;
  alt: string;
  href: string;
}
const ExhibitionCard = ({
  src,
  title,
  date,
  place,
  alt,
  href,
}: ExhibitionCardProps) => {
  return (
    <div className="px-2 pt-2 pb-8 w-full lg:pb-11 border border-opacity-20 border-primary">
      <Image
        width={421}
        height={421}
        src={src}
        alt={alt}
        className="aspect-[4/3] h-auto lg:aspect-square bg-cover bg-center w-full"
      />
      <TitleInter className="mt-4">{title}</TitleInter>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col gap-2">
          <Paragraph>{date}</Paragraph>
          <Paragraph>{place}</Paragraph>
        </div>

        <div className="py-2">
        <LinkBtn
          className="lg:w-[220px] text-xs lg:text-base flex justify-center items-center"
          href={href}
          mobileText="More Detail"
          dtText="View Detail"
          />
          </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
