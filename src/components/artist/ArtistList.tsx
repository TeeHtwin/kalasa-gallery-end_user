import { Artist, ListPage } from "@/types";
import React from "react";
import ArtistsCard from "@/components/artist/ArtistsCard";
import ArtistsCardLayout from "@/components/artist/ArtistsCardLayout";
import { fetchData } from "@/data/data";

const ArtistList = async ({ query,
  currentPage }: ListPage) => {

    const artistData = await fetchData(currentPage, query, 'artist');
  return (
    <div className="grid grid-rows-4 mt-5 lg:mt-10 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-2 lg:gap-5">
      {artistData?.map((artist:any) => (
        <ArtistsCardLayout artistId={artist?.id} key={artist?.id}>
          <ArtistsCard {...artist} />
        </ArtistsCardLayout>
      ))}
    </div>
  );
};

export default ArtistList;
