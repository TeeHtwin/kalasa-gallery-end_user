"use client";

import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import GalleryList from "@/app/components/gallery/GalleryList";
import Loading from "../common/Loading";
import { fetchApi } from "@/fetchers/api";
import NoResult from "../common/NoResult";
import HeroSearch from "../HeroSearch/HeroSearch";
import Layout from "../common/Layout";

const GalleryPage = () => {
  const [keyword, setKeyword] = useState("");
  const {
    data: response,
    isFetching,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["artworks"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/artwork/list?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const { data: pagination } = lastPage;
      return pagination?.last_page > pagination?.current_page;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const { data: pagination } = firstPage;
      return pagination?.from < pagination?.current_page;
    },
  });

  const { data: searchData, isFetching: searchFetching } = useQuery({
    queryKey: ["artworks", keyword],
    queryFn: () => fetchApi(`enduser/artworks/search-by-name?q=${keyword}`),
  });

  if (isFetching) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const events = apiResponse ? apiResponse?.data : [];
  return (
    <Layout>
      <HeroSearch
        name="Our Artworks"
        placeholder="Search Artwork..."
        setKeyword={setKeyword}
      />
      {keyword ? (
        searchData?.data ? (
          <div>
            Showing {searchData?.data?.total} results for{" "}
            <strong>{keyword}</strong>
          </div>
        ) : (
          <div>
            Showing 0 result for <strong>{keyword}</strong>
          </div>
        )
      ) : null}
      {keyword && !searchFetching ? (
        <GalleryList data={searchData?.data?.data} />
      ) : (
        <GalleryList data={events} />
      )}
    </Layout>
  );
};

export default GalleryPage;
