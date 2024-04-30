/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Title from "../components/common/Title";
import LinkBtn from "../components/button/LinkBtn";
import Layout from "../components/common/Layout";
import Paragraph from "../components/common/Text/Paragraph";
import Image from "next/image";
import aboutUs from "@/../public/img/aboutUs.png";
import ContactUs from "../components/contactUs/ContactUs";
import CollectionCard from "../components/cards/CollectionCard";
import HeroSection from "../components/home/HeroSection";
import ExhibitionCard from "@/components/cards/ExhibitionCard";
import { Event } from "@/types";
// import { getHomeData } from "@/data/data";
import GalleryCard from "@/components/cards/GalleryCard";

export default async function page() {
  async function getHomeData() {
    try {
      const response = await fetch(
        `https://api.kalasa.gallery/api/enduser/home`
      );
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch Home Page");
    }
  }
  const homeData = await getHomeData();
  const { artworks } = await homeData;
  return (
    <>
      <HeroSection />
      <Layout>
        <div className="flex items-center justify-between">
          <Title className="text-primary">Events</Title>
          <LinkBtn
            href="/events"
            mobileText="See all"
            dtText="View All Events &rarr;"
          />
        </div>
        <div className="mt-5 lg:mt-20 flex justify-between w-full gap-2 flex-col lg:flex-row">
          {homeData &&
            homeData.events.map((info: Event, index: number) => (
              <ExhibitionCard key={info.id} info={info} />
            ))}
        </div>
      </Layout>
      <Layout>
        <div className="flex justify-between">
          <Title className="text-primary">Our Artwork Collection</Title>
          <LinkBtn
            href="/artworks"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        <div className="columns-2 xl:columns-3 md:columns-2 sm:columns-2 gap-3 space-y-4 mt-5 lg:mt-10">
          {homeData &&
            artworks?.map((artwork: any) => (
              <GalleryCard info={artwork} key={artwork.id} />
            ))}
        </div>
      </Layout>

      <Layout className="lg:p-0 grid grid-cols-1 lg:grid-cols-2 bg-primary-light text-primary lg:text-5xl mt-2">
        <div className=" flex justify-center mb-4 lg:mb-0 lg:px-[102px]  flex-col">
          <Title className="mb-5 mt-5 lg:mt-0">What is Kalasa</Title>
          <div className="flex flex-col gap-3">
            <Paragraph>
              Kalasa Art Space is started home studio in 2016 and founded as a
              public space in 2019 by Ma Su Htwe and her spouse, artist Htoo
              Aung Kyaw.
            </Paragraph>
            <Paragraph>
              Ma Su Htwe is found of sharing and does art healing workshops to
              support the community according to her art space motto, " Art Is
              Sharing ".
            </Paragraph>
            <Paragraph>
              KALASA is the name of the pot-like pregnant lady mother's womb,
              which translates as 'to prosper. Aim to prosper Burmese artsense,
              it became the name of art space.
            </Paragraph>
            <Paragraph>
              KALASA art space mainly features the artwork of famous
              internationally renowned artist, Aung Myint, in addition to
              displaying various artworks of promising Myanmar artists.
            </Paragraph>
            <Paragraph>
              Kalasa also keeps rare book collections as a small archive for all
              researchers. The historic antique stuffs in the colonial building
              is very harmonious with the architecture.
            </Paragraph>
            <Paragraph>
              KALASA Art Space is a space where there are arts and the hearts.
            </Paragraph>
          </div>
        </div>
        <Image
          src={aboutUs}
          width={756}
          height={756}
          className="lg:aspect-square bg-contain bg-neutral-light aspect-[3/2] p-[22px] lg:p-0"
          alt="about us"
        />
      </Layout>
      {/* collection */}
      <Layout className="lg:p-20 mt-6 text-primary lg:text-5xl">
        <div className="flex justify-between">
          <Title>Explore Our Collection</Title>
          <LinkBtn
            href="/collections"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        {homeData && (
          <div className="columns-2 lg:columns-3 gap-2 lg:gap-5 mt-5 lg:mt-10 w-full">
            {homeData?.collections.map((data: any) => (
              <CollectionCard key={data?.id} info={data} />
            ))}
          </div>
        )}
      </Layout>
      <ContactUs name={null} />
    </>
  );
}
