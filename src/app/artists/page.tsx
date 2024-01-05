import React from "react";
import Layout from "../components/common/Layout";
import ArtistPage from "../components/artist/ArtistPage";
import HeroSearch from "../components/HeroSearch/HeroSearch";

const page = () => {
  return (
    <Layout className="wrapper">
      <HeroSearch name="Our Artists" placeholder="Search Artist..." />
      <ArtistPage />
    </Layout>
  );
};

export default page;
