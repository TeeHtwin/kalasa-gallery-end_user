import React from "react";
import Layout from "../components/common/Layout";
import ArtistsCard from "../components/cards/artists/ArtistsCard";
import ArtistsCardLayout from "../components/cards/artists/ArtistsCardLayout";
import SectionHeader from "../components/common/SectionHeader";

const dummyData = [
  {
    src: "https://via.placeholder.com/600/92c952",
    href: "/artists/1",
    name: "John Doe",
    job: "Painter",
  },
  {
    src: "https://via.placeholder.com/600/24f355",
    href: "/artists/2",
    name: "Jane Smith",
    job: "Sculptor",
  },
  {
    src: "https://via.placeholder.com/600/f66b97",
    href: "/artists/3",
    name: "Bob Johnson",
    job: "Photographer",
  },
  {
    src: "https://via.placeholder.com/600/3fd15c",
    href: "/artists/4",
    name: "Alice Brown",
    job: "Illustrator",
  },
  {
    src: "https://via.placeholder.com/600/aa437a",
    href: "/artists/5",
    name: "Charlie White",
    job: "Graphic Designer",
  },
  {
    src: "https://via.placeholder.com/600/c2b67d",
    href: "/artists/6",
    name: "Eva Black",
    job: "Mixed Media Artist",
  },
  {
    src: "https://via.placeholder.com/600/e0443b",
    href: "/artists/7",
    name: "David Gray",
    job: "Digital Artist",
  },
  {
    src: "https://via.placeholder.com/600/466685",
    href: "/artists/8",
    name: "Sophie Green",
    job: "Printmaker",
  },
];

const renderArtistCards = () => {
  return dummyData.map((data) => (
    <ArtistsCardLayout {...data} key={data.name}>
      <ArtistsCard {...data} />
    </ArtistsCardLayout>
  ));
};

const page = () => {
  return (
    <Layout>
      <SectionHeader
        titleText="Our Artists"
        searchPlaceholder="Search Artists"
      />
      <div className="mt-10 lg:mt-20 grid grid-rows-4 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-2 lg:gap-5">
        {renderArtistCards()}
      </div>
    </Layout>
  );
};

export default page;
