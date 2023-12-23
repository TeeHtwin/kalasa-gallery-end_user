import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import ArtistPage from "../components/artist/ArtistPage";

const page = () => {
  return (
    <Layout>
      <SectionHeader
        titleText="Our Artists"
        searchPlaceholder="Search Artists"
      />
      <ArtistPage />
    </Layout>
  );
};

export default page;
