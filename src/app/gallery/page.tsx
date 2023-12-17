import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";
import GalleryList from "../components/gallery/GalleryList";
import Pagination from "../components/pagination/Pagination";

const page = () => {
  const artworkList = [
    {
      id: 1,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: true,
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1700744228339-03c725f5ee57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: true,
      thumbnail:
        "https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 7,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: true,
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1700801992428-6db75bbffa7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 9,
      title: "Art of Mother by Wood",
      artist: "Khin Maung Yin",
      size: "(18 x 24) inches AC",
      isAvailable: false,
      thumbnail:
        "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <Layout>
      <SectionHeader
        titleText={"Our Artworks"}
        searchPlaceholder="Search Arkwork"
      />
      <GalleryList data={artworkList} />
      <div className="mt-10 lg:mt-20">
        <Pagination totalPages={5} />
      </div>
    </Layout>
  );
};

export default page;
