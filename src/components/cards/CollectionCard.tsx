import Image from "next/image";
import React from "react";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";
import { Collection } from "@/types";

const CollectionCard = ({ info }: { info: Collection }) => {
  const { id, title, image } = info;
  const imageSrc =
    image && image.length > 0 ? image : "/img/smallBackground.jpeg";
  const isApiImage =
    typeof imageSrc === "string" &&
    imageSrc.startsWith("https://api.kalasa.gallery/");
  return (
    <div
      className={`px-1 pt-1 pb-4 border border-primary border-opacity-20 aspect-auto lg:pt-2 lg:px-2 mb-8 h-fit break-inside-avoid`}
    >
      <Link data-testid="collection-link" href={`/collections/${id}`}>
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt="collection poster"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          unoptimized={isApiImage}
          className="w-full lg:mb-[32px] mb-3 h-auto"
        />
        <Paragraph className="lg:text-2xl font-semibold">
          {title ? title : ""}
        </Paragraph>
      </Link>
    </div>
  );
};

export default CollectionCard;
