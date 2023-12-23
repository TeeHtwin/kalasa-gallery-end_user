import React from "react";
import BlogPage from "../components/blog/BlogPage";
import HeroSearch from "../components/HeroSearch/HeroSearch";

const page = async () => {
  return (
    <>
      <section className="text-primary px-4 sm:px-10 lg:px-18 m-auto py-20">
        <HeroSearch />
        <BlogPage />
      </section>
    </>
  );
};

export default page;
