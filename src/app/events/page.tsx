import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHead";
import { dummyData } from "../page";
import Exhibition from "../components/cards/ExhibitionCard";
import Pagination from "../components/common/pagination";

const dummyPages = [1, 2, 3];

const page = () => {
  return (
    <Layout>
      <div className="">
        <SectionHeader />
      </div>
      <div className="mt-5 lg:mt-20 flex justify-between w-full gap-[10px] flex-col lg:flex-row">
        {dummyData.map((data, index) => (
          <Exhibition key={index} {...data} />
        ))}
      </div>
      {/* pagination */}
      <Pagination pages={dummyPages} />
    </Layout>
  );
};

export default page;
