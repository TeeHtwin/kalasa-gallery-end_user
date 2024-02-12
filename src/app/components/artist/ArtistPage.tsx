"use client";

import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import ArtistList from "./ArtistList";
import Loading from "../common/Loading";
import { fetchApi } from "@/fetchers/api";
import Layout from "../common/Layout";
import HeroSearch from "../HeroSearch/HeroSearch";

const ArtistPage = () => {
  const [keyword, setKeyword] = useState("");
  const {
    data: response,
    isFetching,
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
  const { data: searchData, isFetching: searchFetching } = useQuery({
    queryKey: ["artists", keyword],
    queryFn: () => fetchApi(`enduser/artist/search-by-name?q=${keyword}`),
  });
  if (isFetching) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const artists = apiResponse ? apiResponse?.data : [];

  return (
    <Layout>
      <HeroSearch
        name="Our Artists"
        placeholder="Search Artist..."
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
        <ArtistList data={searchData?.data?.data} />
      ) : (
        <ArtistList data={artists} />
      )}
    </Layout>
  );
};

export default ArtistPage;
