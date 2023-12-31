import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";

import ExhibitionCard from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
import HeroSearch from "../components/HeroSearch/HeroSearch";
import { Event } from "@/types";
// import Pagination from "../components/common/pagination";
import data from "@/data/index";

export default async function page() {
  // const response = await fetch(
  //   "https://kalasa-gallery-end-user-website-he17lzhyp-teehtwin.vercel.app/api/events"
  // ).then((data) => {
  //   return data.json();
  // });
  const response = data.events;
  return (
    <Layout>
      <HeroSearch name="Our Events" placeholder="Search Event..." />

      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px] ">
        {response.map((info: Event, index: number) => (
          <ExhibitionCard key={index} info={info} />
        ))}
      </div>
      {/* pagination */}
      <Pagination totalPages={10} />
    </Layout>
  );
}
