import Image from "next/image";
import React from "react";
import Pagination from "@/app/components/pagination/Pagination";

const page = () => {
  const blogs = [
    {
      id: 11,
      img: "https://placekitten.com/400/600",
      title: "The Whispers of Legend",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
    {
      id: 12,
      img: "https://placekitten.com/600/800",
      title: "Perception",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
    {
      id: 13,
      img: "https://placekitten.com/800/1200",
      title: "The squares of balance in society",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
    {
      id: 14,
      img: "https://placekitten.com/700/1000",
      title: "Portrait of Singer Htoo Eain Thin",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
    {
      id: 15,
      img: "https://placekitten.com/400/600",
      title: "Perception",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
    {
      id: 16,
      img: "https://placekitten.com/600/800",
      title: "The squares of balance in society",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
      author: "Sai Tun Oo",
      date: "Sept 15, 2023",
    },
  ];

  return (
    <>
      <section className="text-primary px-20 max-w-[1600px] m-auto py-20">
        <div className="flex justify-between items-center gap-40">
          <p className="font-serif font-light text-xl sm:text-4xl md:text-5xl lg:text-6xl flex-none">
            Our Blogs
          </p>
          <div className="relative hidden md:block max-w-[600px] w-full flex-auto">
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm border-primary border placeholder:text-primary outline-none"
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

        <div className="flex gap-5 pt-20 flex-wrap justify-center">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border-solid border-[1.5px] border-[#883B0A29] p-2 h-auto w-[400px]"
            >
              <Image
                width={413}
                height={413}
                src={blog.img}
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
          ))}
        </div>
      </section>
      <Pagination totalPages={5} />
    </>
  );
};

export default page;
