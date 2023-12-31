"use client";

import { fetchBlog } from "@/fetchers";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../common/Loading";
import BlogList from "./BlogList";
import Pagination from "@/app/components/pagination/Pagination";

type Props = {};

const BlogPage = (props: Props) => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchBlog(),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <BlogList blogs={blogs ?? null} />
      <Pagination totalPages={5} />
    </>
  );
};

export default BlogPage;
