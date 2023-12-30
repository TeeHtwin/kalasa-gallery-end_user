import React from "react";
import Layout from "../components/common/Layout";
import HeroSearch from "../components/HeroSearch/HeroSearch";
import CollectionPage from "../components/collection/CollectionPage";


const page = () => {
  return (
    <Layout className="lg:py-12">
      <HeroSearch name='Our Collections' placeholder="Search Collection..."/>
      <CollectionPage />
    </Layout>
  );
};

export default page;
