import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";

import ExhibitionCard from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
import HeroSearch from "../components/HeroSearch/HeroSearch";
// import Pagination from "../components/common/pagination";

const dummyPages = [1, 2, 3];

const page = () => {
  const dummyData = [
    {
      id: 1,
      title: "Art Exhibition 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/92c952",
      related: []
    },
    {
      id: 2,
      title: "Sculpture Showcase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/24f355",
      related: []
    },
    {
      id:3,
      title: "Photography Expo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/f66b97",
      related: []
    },
    {
      id:4,
      src: "https://via.placeholder.com/600/f66b97",
      title: "Photography Expo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/24f355",
      related: []
    },
    {
      id: 5,
      title: "Photography Expo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/f66b97",
      related: []
    },
    {
      id: 6,
      title: "Art Exhibition 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      from_date: "August 19 to 23, 2023",
      to_date: "August 19 to 23, 2024",
      start_time: 'Today',
      end_time: 'Tomorrow',
      gallery: "Art Gallery A",
      image: "https://via.placeholder.com/600/92c952",
      related: []
    },
  ];
  return (
    <Layout>
      <HeroSearch name="Our Events" placeholder="Search Event..." />

      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px] ">
        {dummyData.map((data, index) => (
          <ExhibitionCard key={index} info={data} />
        ))}
      </div>
      {/* pagination */}
      <Pagination totalPages={10} />
    </Layout>
  );
};

export default page;
