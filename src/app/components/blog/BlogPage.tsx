"use client";

import { fetchBlog } from "@/fetchers";
import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import Loading from "../common/Loading";
import BlogList from "./BlogList";
import fetchApi from "@/fetchers/api";

const BlogPage = () => {
  const {
    data: response,
    isSuccess,
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

  if (!isSuccess) {
    return <Loading />;
  }
  const apiResponse = response?.pages[0]["data"];
  const blogs = apiResponse ? apiResponse?.data : [];

  return <BlogList blogs={blogs} />;
};

export default BlogPage;
