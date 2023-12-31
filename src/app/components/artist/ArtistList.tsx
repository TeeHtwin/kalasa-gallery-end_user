import { Artist } from "@/types";
import React from "react";
import ArtistsCard from "@/app/components/artist/ArtistsCard";
import ArtistsCardLayout from "@/app/components/artist/ArtistsCardLayout";

interface ArtistListProps {
  data: Artist[] | null;
}

const ArtistList = ({ data }: ArtistListProps) => {
  return (
    <div className="grid grid-rows-4 mt-5 lg:mt-10 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-2 lg:gap-5">
      {data?.map((info) => (
        <ArtistsCardLayout artistId={info?.id} key={info?.id}>
          <ArtistsCard {...info} />
        </ArtistsCardLayout>
      ))}
    </div>
  );
};

export default ArtistList;
