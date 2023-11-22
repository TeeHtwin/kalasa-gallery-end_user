import React from "react";
import Layout from "../components/common/Layout";
import Title from "../components/common/Title";
import SearchBar from "../components/search/SearchBar";
import ArtistsCard from "../components/cards/artists/ArtistsCard";
import ArtistsClientLayout from "../components/cards/artists/ArtistsClientLayout";

const page = () => {
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
  return (
    <Layout className="lg:py-20">
      <div className="flex justify-between">
        <Title className="lg:text-5xl text-primary">Our Artists</Title>
        <SearchBar
          className="hidden lg:block"
          placeholder="Search Artists ..."
        />
      </div>
      <div className="grid grid-rows-4 mt-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-2 lg:gap-5">
        {dummyData.map((data) => (
          <ArtistsClientLayout {...data} key={data.name}>
            <ArtistsCard {...data} />
          </ArtistsClientLayout>
        ))}
      </div>
    </Layout>
  );
};

export default page;
