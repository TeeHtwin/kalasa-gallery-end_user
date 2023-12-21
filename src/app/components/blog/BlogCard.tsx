import React from "react";
import Image from "next/image";
import { Blog } from "@/types";

const BlogCard = (blog: Blog) => {
  return (
    <div
      key={blog.id}
      className="border-solid border-[1.5px] border-[#883B0A29] p-2 h-auto w-[400px]"
    >
      <Image
        width={413}
        height={413}
        src={blog.image}
        alt="blog image"
        className="aspect-[4/3] h-auto lg:aspect-square bg-cover bg-center w-full"
      />
      <div className="py-3 px-3">
        <p className="font-sans text-base font-extralight">
          By {blog.author} | {blog.date}
        </p>
        <p className="py-4 font-semibold text-2xl">{blog.title}</p>
        <p>{blog.content.slice(0, 130)}...</p>
        <button className="pt-5 text-lg font-sans font-medium">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
