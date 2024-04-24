import React from "react";
import Image from "next/image";
import { Blog } from "@/types";
import Link from "next/link";

const BlogCard = (blog: Blog) => {
  return (
    <Link href={`/blogs/${blog?.id}`}>
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
          {/* <p className="font-sans text-base font-extralight">
          By {blog.author} | {blog.date}
        </p> */}
          <p className="py-4 font-semibold text-2xl">{blog.title}</p>
          <p>{blog.description.slice(0, 130)}...</p>
          <Link
            href={`blogs/${blog.id.toString()}`}
            className="pt-5 text-lg font-sans font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
