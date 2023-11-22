import Image from "next/image";
import React from "react";

const CollectionCard = ({ id, img, title }) => {
  return (
    <div
      key={id}
      className="border-solid border-[1.5px] border-[#883B0A29] aspect-auto bg-neutral-light mb-4 sm:mb-0"
    >
      <Image
        src={img}
        width={500}
        height={500}
        alt="collection poster"
        className="relative w-full"
      />
    </div>
  );
};

export default CollectionCard;
