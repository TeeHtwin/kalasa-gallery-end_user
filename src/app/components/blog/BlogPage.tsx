"use client";

import { fetchBlog } from "@/fetchers";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../common/Loading";
import BlogList from "./BlogList";
import Pagination from "@/app/components/pagination/Pagination";
import fetchApi from "@/fetchers/api";

type Props = {};

const BlogPage = (props: Props) => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchApi("enduser/blog/list"),
  });

  if (isLoading) {
    return <Loading />;
  }
  const blogs = response ? response?.data : [];

  return <BlogList blogs={blogs} />;
};

export default BlogPage;
