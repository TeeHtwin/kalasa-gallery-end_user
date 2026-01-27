"use client";

import React from "react";
import Image from "next/image";
import img from "@/app/blogs/[id]/blog_img.png";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import { useQuery } from "react-query";
import { fetchApi } from "@/fetchers/api";
import Loading from "../common/Loading";
import { Blog } from "@/types";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import BlogCard from "./BlogCard";
import RelativeLayout from "../exhibition/RelativeLayout";

type Props = {};

const BlogDetailedPage = ({ blogId }: { blogId: string }) => {
  const { push } = useRouter();

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchApi(`enduser/blog/${blogId}`),
  });

  console.log("blog detail::", response);
  if (isLoading) {
    return <Loading />;
  }

  if (response?.message === "Server Error") {
    push("/server-error");
  }

  const blogDetailed: Blog = !isError ? response?.data : null;
  const imageSrc =
    blogDetailed?.image && blogDetailed.image.length > 0
      ? blogDetailed.image
      : "/img/smallBackground.jpeg";
  const isApiImage =
    typeof imageSrc === "string" &&
    imageSrc.startsWith("https://api.kalasa.gallery/");
  return (
    <div>
      <section className="text-primary max-w-screen-2xl lg:px-20 lg:py-12 wrapper">
        <Breadcrumb
          items={[
            { name: "Home", url: "/", active: true },
            { name: "Our Blogs", url: "/blogs", active: true },
            { name: "Blog Details", url: `/blogs/${blogId}`, active: false },
          ]}
        />
        {blogDetailed && (
          <div className="px-4 sm:px-10 lg:px-18">
            <Image
              src={imageSrc}
              alt={blogDetailed?.title}
              width={700}
              height={475}
              sizes="(min-width: 1024px) 70vw, 100vw"
              unoptimized={isApiImage}
              className="m-auto"
            />
            {/* <p className="font-sans text-xs sm:text-lg font-extralight text-left sm:text-center py-4 sm:py-16">
              {DateTime.fromISO(blogDetailed.created_at).toFormat(
                blogDetailed?.created_at
              )}
            </p> */}
            <div className="max-w-screen-xl m-auto">
              <p className="font-serif font-semibold mt-8 text-xl sm:text-5xl text-left sm:text-center ">
                {blogDetailed?.title}
              </p>
              <p className="py-4 text-lg leading-8 sm:py-16 whitespace-pre-wrap">
                {blogDetailed?.description}
              </p>
            </div>
            <hr className="block sm:hidden" />
            <RelativeLayout
              title="Related Blogs"
              dtText="see more"
              mobileText="see more"
              href="/blogs"
            >
              <div className="py-4 sm:py-20 flex items-start flex-wrap gap-4">
                {blogDetailed?.related?.map((blog) => (
                  <BlogCard {...blog} key={blog.id} />
                ))}
              </div>
            </RelativeLayout>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogDetailedPage;
