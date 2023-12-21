"use client";

import React from "react";
import { useQuery } from "react-query";
import Pagination from "@/app/components/pagination/Pagination";
import { fetchArtist } from "@/fetchers";
import ArtistList from "./ArtistList";

const ArtistPage = () => {
  const { data: artists } = useQuery({
    queryKey: "artists",
    queryFn: () => fetchArtist(),
  });
  return (
    <div>
      <ArtistList data={artists ?? null} />
      <div className="mt-10 lg:mt-20">
        <Pagination totalPages={5} />
      </div>
    </div>
  );
};

export default ArtistPage;
