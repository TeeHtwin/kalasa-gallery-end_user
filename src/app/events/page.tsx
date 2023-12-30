import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import Exhibition from "../components/cards/ExhibitionCard";
import { ExhibitionCardProps } from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
import Loading from "../components/common/Loading";
import fetchApi from "@/fetchers/fetchApi";

const page = async () => {
  const data = await fetchApi("event/list");
  return (
    <Layout>
      <SectionHeader
        titleText="Our Events"
        searchPlaceholder="Search Exhibition"
      />
      <div className="mt-5 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px] ">
        {/* {data ? (
          data.map((data, index) => <Exhibition key={index} {...data} />)
        ) : (
          <Loading />
        )} */}
      </div>
    </Layout>
  );
};

export default page;
