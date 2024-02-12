import React from "react";
import BlogPage from "../components/blog/BlogPage";
import HeroSearch from "../components/HeroSearch/HeroSearch";

const page = async () => {
  return (
    <>
      {/* <section className="text-primary py-2 lg:py-12 lg:px-20 wrapper">
        <HeroSearch name="Our Blogs" placeholder="Search Blog..." />
        <BlogPage />
      </section> */}
      <BlogPage />
    </>
  );
};

export default page;
