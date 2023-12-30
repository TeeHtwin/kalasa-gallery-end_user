import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import Exhibition from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
import { Event } from "@/types";
// import Pagination from "../components/common/pagination";

export default async function page() {
  const response = await fetch("http://localhost:3000/api/events").then(
    (data) => {
      return data.json();
    }
  );
  return (
    <Layout>
      <SectionHeader
        titleText="Our Events"
        searchPlaceholder="Search Exhibition"
      />
      <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px] ">
        {response?.data.map((info: Event, index: number) => (
          <Exhibition key={index} info={info} />
        ))}
      </div>
      {/* pagination */}
      <Pagination totalPages={10} />
    </Layout>
  );
}
