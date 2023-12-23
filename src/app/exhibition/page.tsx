import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import Exhibition from "../components/cards/ExhibitionCard";
import { ExhibitionCardProps } from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
// import Pagination from "../components/common/pagination";

const dummyPages = [1, 2, 3];

const page = () => {
  const dummyData: ExhibitionCardProps[] = [
    {
      src: "https://via.placeholder.com/600/92c952",
      title: "Art Exhibition 1",
      date: "August 19 to 23, 2023",
      place: "Art Gallery A",
      alt: "Artwork 1",
      href: "/exhibition/1",
    },
    {
      src: "https://via.placeholder.com/600/24f355",
      title: "Sculpture Showcase",
      date: "August 19 to 23, 2023",
      place: "Sculpture Park B",
      alt: "Sculpture 2",
      href: "/exhibition/2",
    },
    {
      src: "https://via.placeholder.com/600/f66b97",
      title: "Photography Expo",
      date: "August 19 to 23, 2023",
      place: "Photo Studio C",
      alt: "Photograph 3",
      href: "/exhibition/3",
    },
    {
      src: "https://via.placeholder.com/600/f66b97",
      title: "Photography Expo",
      date: "August 19 to 23, 2023",
      place: "Photo Studio C",
      alt: "Photograph 4",
      href: "/exhibition/4",
    },
    {
      src: "https://via.placeholder.com/600/f66b97",
      title: "Photography Expo",
      date: "August 19 to 23, 2023",
      place: "Photo Studio C",
      alt: "Photograph 5",
      href: "/exhibition/5",
    },
    {
      src: "https://via.placeholder.com/600/92c952",
      title: "Art Exhibition 1",
      date: "August 19 to 23, 2023",
      place: "Art Gallery A",
      alt: "Artwork 6",
      href: "/exhibition/6",
    },
  ];
  return (
    <Layout>
      <SectionHeader
        titleText="Our Events"
        searchPlaceholder="Search Exhibition"
      />
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px] ">
        {dummyData.map((data, index) => (
          <Exhibition key={index} {...data} />
        ))}
      </div>
      {/* pagination */}
      <Pagination totalPages={10} />
    </Layout>
  );
};

export default page;
