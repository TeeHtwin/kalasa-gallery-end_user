import { Artist } from "@/types";
import React from "react";
import ArtistsCard from "@/app/components/artist/ArtistsCard";
import ArtistsClientLayout from "@/app/components/artist/ArtistsClientLayout";

interface ArtistListProps {
  data: Artist[] | null;
}

const ArtistList = ({ data }: ArtistListProps) => {
  return (
    <div className="grid grid-rows-4 mt-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-2 lg:gap-5">
      {data?.map((info) => (
        <ArtistsClientLayout info={info} key={info?.id}>
          <ArtistsCard {...info} />
        </ArtistsClientLayout>
      ))}
    </div>
  );
};

export default ArtistList;
