"use client";

import fetchGallery from "@/fetchers";
import React from "react";
import { useQuery } from "react-query";
import GalleryList from "@/app/components/gallery/GalleryList";
import Pagination from "@/app/components/pagination/Pagination";
import Loading from "../common/Loading";

const GalleryPage = () => {
  const { isLoading, data: artworkList } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => fetchGallery(),
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <GalleryList data={artworkList} />
      <div className="mt-10 lg:mt-20">
        <Pagination totalPages={5} />
      </div>
    </div>
  );
};

export default GalleryPage;
