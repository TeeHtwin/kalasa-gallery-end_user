"use client";

import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import Loading from "../common/Loading";
import BlogList from "./BlogList";
import { fetchApi } from "@/fetchers/api";
import Layout from "../common/Layout";
import HeroSearch from "../HeroSearch/HeroSearch";

const BlogPage = () => {
  const [keyword, setKeyword] = useState("");
  const {
    data: response,
    isFetching,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/blog/list?page=${pageParam}`),
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
    queryKey: ["blogs", keyword],
    queryFn: () => fetchApi(`enduser/blog/search-by-name?q=${keyword}`),
  });

  if (isFetching) {
    return <Loading />;
  }
  const apiResponse = response?.pages[0]["data"];
  const blogs = apiResponse ? apiResponse?.data : [];

  return (
    <Layout>
      <HeroSearch
        name="Our Blogs"
        placeholder="Search Blogs..."
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
        <BlogList blogs={searchData?.data?.data} />
      ) : (
        <BlogList blogs={blogs} />
      )}
    </Layout>
  );
};

export default BlogPage;
