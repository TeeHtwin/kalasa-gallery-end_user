"use client";

import { fetchGallery } from "@/fetchers";
import React from "react";
import { useQuery } from "react-query";
import GalleryList from "@/app/components/gallery/GalleryList";
import Pagination from "@/app/components/pagination/Pagination";
import Loading from "../common/Loading";
import fetchApi from "@/fetchers/api";
import NoResult from "../common/NoResult";

const GalleryPage = () => {
  const { isLoading, data: artworkList } = useQuery({
    queryKey: ["artworks"],
    queryFn: () => fetchApi("enduser/artwork/list"),
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {artworkList?.data?.length > 0 ? (
        <GalleryList data={artworkList ?? null} />
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default GalleryPage;
