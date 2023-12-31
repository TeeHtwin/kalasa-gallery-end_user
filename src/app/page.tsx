import React from "react";
import Title from "./components/common/Title";
import LinkBtn from "./components/button/LinkBtn";
import Layout from "./components/common/Layout";
import Paragraph from "./components/common/Text/Paragraph";
import Image from "next/image";
import aboutUs from "@/../public/img/aboutUs.png";
// import PhotoGallery from "./components/photoLayout/PhotoGallery";
import ContactUs from "./components/contactUs/ContactUs";
import CollectionCard from "./components/cards/CollectionCard";
import Collection from "./components/collection/Collection";
import GalleryList from "./components/gallery/GalleryList";
import HeroSection from "./components/home/HeroSection";
import ExhibitionCard from "@/app/components/cards/ExhibitionCard";
import { Event } from "@/types";

export default async function page() {
  const { data } = await fetch("http://localhost:3000/api/home").then(
    (data) => {
      return data.json();
    }
  );

  return (
    <>
      <HeroSection />
      <Layout>
        <div className="flex items-center justify-between">
          <Title className="text-primary">Upcoming Events</Title>
          <LinkBtn
            href="/events"
            mobileText="See all"
            dtText="View All Events &rarr;"
          />
        </div>
        <div className="mt-5 lg:mt-20 flex justify-between w-full gap-2 flex-col lg:flex-row">
          {data.events.map((info: Event, index: number) => (
            <ExhibitionCard key={index} info={info} />
          ))}
        </div>
      </Layout>
      <Layout className="lg:p-20 text-primary lg:text-5xl">
        <div className="flex justify-between">
          <Title>Expolre Our Collection</Title>
          <LinkBtn
            href="/collections"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        <Collection data={data?.collections} />
      </Layout>

      <Layout className="lg:p-0 grid grid-cols-1 lg:grid-cols-2 bg-primary-light text-primary lg:text-5xl">
        <div className=" flex justify-center mb-4 lg:mb-0 lg:px-[102px]  flex-col">
          <Title className="mb-5">What is Kalasa</Title>
          <Paragraph className="lg:leading-normal leading-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod
            explicabo repudiandae enim provident. Magni ipsa maiores porro est
            natus debitis consequuntur nam voluptatibus, recusandae magnam.
            Perspiciatis sapiente eius atque officiis amet mollitia dolor iure
            exercitationem inventore aspernatur eaque porro quo omnis, non
            maxime cumque earum? Ipsa aperiam quos autem?
          </Paragraph>
        </div>
        <Image
          src={aboutUs}
          width={756}
          height={756}
          className="lg:aspect-square bg-contain bg-neutral-light aspect-[3/2] p-[22px] lg:p-0"
          alt="about us"
        />
      </Layout>
      <Layout>
        <div className="flex justify-between">
          <Title className="text-primary">Our Artwork Collection</Title>
          <LinkBtn
            href="/gallery"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        <GalleryList data={data?.galleries} />
      </Layout>
      <ContactUs />
    </>
  );
}
