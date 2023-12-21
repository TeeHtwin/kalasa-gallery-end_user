import { Blog } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: Blog[] | null }) => {
  return (
    <div className="flex gap-5 pt-20 flex-wrap justify-center">
      {blogs?.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
