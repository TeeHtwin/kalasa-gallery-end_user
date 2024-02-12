import React from "react";
import GalleryCard from "../cards/GalleryCard";
import { Artwork } from "@/types";

interface GalleryListProps {
  data: Artwork[] | null;
}

const GalleryList = ({ data }: GalleryListProps) => {
  return (
    <div className="columns-1 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 mt-5 lg:mt-10">
      {data?.map((gallery, index) => (
        <GalleryCard key={index} info={gallery} />
      ))}
    </div>
  );
};

export default GalleryList;
