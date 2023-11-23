import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import Collection from "../components/collection/Collection";
import Pagination from "../components/pagination/Pagination";

const page = () => {
  const dammyImages = [
    {
      title: "Image 1",
      image: "https://placekitten.com/200/600",
      href: "/collections/image1",
    },
    {
      title: "Image 2",
      image: "https://placekitten.com/600/200",
      href: "/collections/image2",
    },
    {
      title: "Image 3",
      image: "https://placekitten.com/800/1200",
      href: "/collections/image3",
    },
    {
      title: "Image 4",
      image: "https://placekitten.com/700/1000",
      href: "/collections/image4",
    },
    {
      title: "Image 5",
      image: "https://placekitten.com/400/600",
      href: "/collections/image5",
    },
    {
      title: "Image 6",
      image: "https://placekitten.com/600/800",
      href: "/collections/image6",
    },
    {
      title: "Image 7",
      image: "https://placekitten.com/300/500",
      href: "/collections/image7",
    },
    {
      title: "Image 8",
      image: "https://placekitten.com/500/300",
      href: "/collections/image8",
    },
    {
      title: "Image 9",
      image: "https://placekitten.com/700/700",
      href: "/collections/image9",
    },
  ];

  console.log;

  return (
    <Layout className="lg:py-20">
      <SectionHeader
        titleText="Our Collections"
        searchPlaceholder="Search Collections"
      />
      <Collection data={dammyImages} />
      <div className="mt-10 lg:mt-20">
        <Pagination totalPages={5} />
      </div>
    </Layout>
  );
};

export default page;
