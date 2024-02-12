"use client";

import React from "react";
import Image from "next/image";
import img from "@/app/blogs/[id]/blog_img.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import { useQuery } from "react-query";
import { fetchApi } from "@/fetchers/api";
import Loading from "../common/Loading";
import { Blog } from "@/types";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";

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
              src={img}
              alt={blogDetailed?.title}
              width={700}
              height={475}
              className="m-auto"
            />
            <p className="font-sans text-xs sm:text-lg font-extralight text-left sm:text-center py-4 sm:py-16">
              {DateTime.fromISO(blogDetailed.created_at).toFormat(
                "LLLL dd, yyyy"
              )}
            </p>
            <div className="max-w-screen-xl m-auto">
              <p className="font-serif font-semibold text-xl sm:text-5xl text-left sm:text-center ">
                {blogDetailed?.title}
              </p>
              <p className="py-4 sm:py-16 whitespace-pre-wrap">
                {blogDetailed?.description}
              </p>
            </div>
            <hr className="block sm:hidden" />
            <div className="py-8 sm:py-32">
              <div className="text-Brown flex justify-between">
                <p className="font-bold text-xl md:text-3xl font-serif">
                  Related Blogs
                </p>
                <button className="hidden md:block border-[1.5px] border-primary font-medium font-serif text-lg px-5 py-1">
                  See More →
                </button>
                <button className="block md:hidden">See More</button>
              </div>
              <div className="py-4 sm:py-20 flex items-start flex-wrap gap-4">
                {blogDetailed?.related?.map((blog) => (
                  <div
                    key={blog.id}
                    className="border-solid border-[1.5px] border-[#883B0A29] grow basis-80"
                  >
                    <Image
                      src={img}
                      alt="blog poster"
                      width={600}
                      height={800}
                      className="w-full object-cover h-[300px] sm:h-[400px]"
                    />
                    <div className="py-3 px-3">
                      <p className="font-sans text-base font-extralight">
                        {DateTime.fromISO(blog.created_at).toFormat(
                          "LLLL dd, yyyy"
                        )}
                      </p>
                      <p className="py-4 font-semibold text-2xl">
                        {blog.title}
                      </p>
                      <p>{blog.description.slice(0, 130)}...</p>
                      <Link
                        href={blog.id.toString()}
                        className="pt-5 text-lg font-sans font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogDetailedPage;
