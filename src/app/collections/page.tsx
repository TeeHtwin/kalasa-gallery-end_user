import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import Collection from "../components/collection/Collection";
import Pagination from "../components/pagination/Pagination";

const page = () => {
  return (
    <Layout className="lg:py-20">
      <SectionHeader
        titleText="Our Collections"
        searchPlaceholder="Search Collections"
      />
    </Layout>
  );
};

export default page;
