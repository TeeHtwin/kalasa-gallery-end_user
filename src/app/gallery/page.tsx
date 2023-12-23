import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import GalleryPage from "../components/gallery/GalleryPage";

const page = () => {
  return (
    <Layout>
      <SectionHeader
        titleText={"Our Artworks"}
        searchPlaceholder="Search Arkwork"
      />
      <GalleryPage />
    </Layout>
  );
};

export default page;
