import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";

const page = () => {
  return (
    <Layout className="lg:py-20">
      <SectionHeader
        titleText="Our Artists"
        searchPlaceholder="Search Artists"
      />
    </Layout>
  );
};

export default page;
