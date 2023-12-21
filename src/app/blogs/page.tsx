import React from "react";
import BlogPage from "../components/blog/BlogPage";

const page = async () => {
  return (
    <>
      <section className="text-primary px-4 sm:px-10 lg:px-18 m-auto py-20">
        <div className="flex justify-between items-center gap-40">
          <p className="font-serif font-light text-xl sm:text-4xl md:text-5xl lg:text-6xl flex-none">
            Our Blogs
          </p>
          <div className="relative hidden md:block max-w-[600px] w-full flex-auto">
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm border-primary border placeholder:text-primary outline-none bg-neutral-light"
              placeholder="Search Articles..."
              required
              autoComplete="off"
            />

            <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none pr-6">
              <svg
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <BlogPage />
      </section>
    </>
  );
};

export default page;
