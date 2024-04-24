import React from "react";
import GalleryCard from "../cards/GalleryCard";
import { Artwork } from "@/types";
import { fetchArtworks, searchArtworks } from "@/data/data";

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


  const artworksData = await fetchArtworks(currentPage, query);


  // console.log(data);

  return (
    <div className="columns-1 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 mt-5 lg:mt-10">
      {artworksData?.map((gallery: any) => (
        <GalleryCard key={gallery.id} info={gallery} />
      ))}
    </div>
  );
};

export default GalleryList;
