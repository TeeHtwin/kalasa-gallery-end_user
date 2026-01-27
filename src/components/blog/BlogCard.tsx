import React from "react";
import Image from "next/image";
import { Blog } from "@/types";
import Link from "next/link";

const BlogCard = (blog: Blog) => {
  const imageSrc =
    blog?.image && blog.image.length > 0
      ? blog.image
      : "/img/smallBackground.jpeg";
  const isApiImage =
    typeof imageSrc === "string" &&
    imageSrc.startsWith("https://api.kalasa.gallery/");
  return (
    <Link href={`/blogs/${blog?.id}`}>
      <div
        key={blog.id}
        className="border-solid border-[1.5px] border-[#883B0A29] p-2 h-auto w-full"
      >
        <Image
          width={413}
          height={413}
          src={imageSrc}
          alt="blog image"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          unoptimized={isApiImage}
          className="aspect-[4/3] h-auto lg:aspect-square bg-cover object-contain bg-center w-full"
        />
        <div className="py-3 px-3">
          {/* <p className="font-sans text-base font-extralight">
          By {blog.author} | {blog.date}
        </p> */}
          <p className="py-4 font-inter text-primary font-semibold text-2xl">
            {blog.title}
          </p>
          <p className="font-inter text-primary/80">
            {blog.description.slice(0, 130)}...
          </p>
          <Link
            href={`blogs/${blog.id.toString()}`}
            className="pt-5 mt-5 text-lg font-inter text-primary/60 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
