import { Blog } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: Blog[] | null }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center mt-5 lg:mt-10">
      {blogs?.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
