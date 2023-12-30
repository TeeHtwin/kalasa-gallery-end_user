import React from "react";
import Layout from "../components/common/Layout";
import GalleryPage from "../components/gallery/GalleryPage";
import HeroSearch from "../components/HeroSearch/HeroSearch";

const page = () => {
  return (
    <Layout>
      <HeroSearch name='Our Artworks' placeholder="Search Artwork..."/>
      <GalleryPage />
    </Layout>
  );
};

export default page;
