"use client";

import React, { useState } from "react";
import Collection from "./Collection";
import { useInfiniteQuery, useQuery } from "react-query";
import Loading from "../common/Loading";
import { fetchApi } from "@/fetchers/api";
import Layout from "../common/Layout";
import HeroSearch from "../HeroSearch/HeroSearch";

type Props = {};

const CollectionPage = (props: Props) => {
  const [keyword, setKeyword] = useState("");
  const {
    data: response,
    isFetching,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["collections"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/collection/list?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const { data: pagination } = lastPage;
      return pagination?.last_page > pagination?.current_page;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const { data: pagination } = firstPage;
      return pagination.from < pagination?.current_page;
    },
  });
  const { data: searchData, isFetching: searchFetching } = useQuery({
    queryKey: ["collections", keyword],
    queryFn: () => fetchApi(`enduser/collection/search-by-name?q=${keyword}`),
  });
  if (isFetching) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const collections = apiResponse ? apiResponse?.data : [];
  return (
    <Layout>
      <HeroSearch
        name="Our Collections"
        placeholder="Search Collection..."
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
        <Collection data={searchData?.data?.data} />
      ) : (
        <Collection data={collections ?? null} />
      )}
    </Layout>
  );
};

export default CollectionPage;
