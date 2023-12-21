"use client";

import React from "react";
import { useQuery } from "react-query";
import Pagination from "@/app/components/pagination/Pagination";
import { fetchArtist } from "@/fetchers";
import ArtistList from "./ArtistList";
import Loading from "../common/Loading";

const ArtistPage = () => {
  const { data: artists, isLoading } = useQuery({
    queryKey: ["artists"],
    queryFn: () => fetchArtist(),
  });
  if (isLoading) {
    return <Loading />;
  }

  console.log("artists::", artists);
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
