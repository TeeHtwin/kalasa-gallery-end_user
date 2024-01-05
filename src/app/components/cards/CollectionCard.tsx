import Image from "next/image";
import React from "react";
import Paragraph from "../common/Text/Paragraph";
import Link from "next/link";
import { Collection } from "@/types";

const CollectionCard = ({
  info,
  index,
}: {
  info: Collection;
  index: number;
}) => {
  const { id, title, image } = info;
  return (
    <div
      className={`px-1 pt-1 pb-4 border border-primary border-opacity-20 aspect-auto bg-purple-100 lg:pt-2 lg:px-2 mb-8 h-fit`}
    >
      <Link data-testid="collection-link" href={`/collections/${id}`}>
        <Image
          src={image ?? "https://via.placeholder.com/150/771796"}
          width={500}
          height={500}
          alt="collection poster"
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
