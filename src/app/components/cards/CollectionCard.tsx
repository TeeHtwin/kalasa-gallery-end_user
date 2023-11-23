import Image from "next/image";
import React from "react";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";

interface CollectionCardProps {
  image: string;
  title: string;
  href: string;
}
const CollectionCard = ({ title, image, href }: CollectionCardProps) => {
  return (
    <Link
      href={href}
      className="border-solid px-1 pt-1 pb-4 border border-primary border-opacity-20 aspect-auto bg-neutral-light lg:pt-2 lg:px-2 "
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="collection poster"
        className="relative w-full lg:mb-[32px] mb-3 h-auto"
      />
      <Paragraph className="lg:text-2xl font-semibold">{title}</Paragraph>
    </Link>
  );
};

export default CollectionCard;
