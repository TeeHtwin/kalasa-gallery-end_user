"use client";

import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import Pagination from "@/app/components/pagination/Pagination";
import { fetchArtist } from "@/fetchers";
import ArtistList from "./ArtistList";
import Loading from "../common/Loading";
import fetchApi from "@/fetchers/api";

const ArtistPage = () => {
  const {
    data: response,
    isSuccess,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["artists"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/artist/list?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const { data: pagination } = lastPage;
      return pagination?.last_page > pagination?.current_page;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const { data: pagination } = firstPage;
      return pagination?.from < pagination?.current_page;
    },
  });
  if (!isSuccess) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const artists = apiResponse ? apiResponse?.data : [];

  return <ArtistList data={artists} />;
};

export default ArtistPage;
