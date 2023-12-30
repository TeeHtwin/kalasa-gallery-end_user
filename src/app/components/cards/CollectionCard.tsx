import Image from "next/image";
import React from "react";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";
import { Collection } from "@/types";

const CollectionCard = ({ title, id, image }: Collection) => {
  return (
    <Link data-testid="collection-link" href={`/gallery/${id}`}>
      <div className="border-solid px-1 pt-1 pb-4 border border-primary border-opacity-20 aspect-auto bg-neutral-light lg:pt-2 lg:px-2 mb-8">
        <Image
          src={image ? image : "https://via.placeholder.com/150/771796"}
          width={500}
          height={500}
          alt="collection poster"
          className="relative w-full lg:mb-[32px] mb-3 h-auto"
        />
        <Paragraph className="lg:text-2xl font-semibold">
          {title ? title : ""}
        </Paragraph>
      </div>
    </Link>
  );
};

export default CollectionCard;
