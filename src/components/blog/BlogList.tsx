import { Blog, ListPage } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";
import { fetchData } from "@/data/data";

const BlogList = async ({ query, currentPage }: ListPage) => {
  const blogsData = await fetchData(currentPage, query, "blog");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-5 lg:mt-10">
      {blogsData?.map((blog: any) => (
        <BlogCard key={blog?.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
