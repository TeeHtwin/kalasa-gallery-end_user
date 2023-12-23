import Image from "next/image";
import React from "react";
import Pagination from "@/app/components/pagination/Pagination";
import SectionHeader from "../components/common/SectionHeader";

const page = async () => {
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
      <section className="text-primary px-4 sm:px-10 lg:px-20 m-auto py-12">
        
          <SectionHeader titleText="Our Blogs" searchPlaceholder="Search Articles" />
        

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
