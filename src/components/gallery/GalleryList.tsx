import React from "react";
import GalleryCard from "../cards/GalleryCard";
import { Artwork } from "@/types";
import { fetchData } from "@/data/data";

// interface GalleryListProps {
//   data: Artwork[] | null;
// }
// { data }: GalleryListProps
const GalleryList = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const artworksData = await fetchData(currentPage, query, "artwork");

  return (
    <div className="masonry-grid mt-6 lg:mt-10">
      {artworksData?.map((gallery: any) => (
        <GalleryCard key={gallery.id} info={gallery} />
      ))}
    </div>
  );
};

export default GalleryList;
