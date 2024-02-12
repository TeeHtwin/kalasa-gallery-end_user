import Layout from "@/app/components/common/Layout";
import MainLayout from "@/app/components/exhibition/MainLayout";
import React from "react";
import Image from "next/image";
import Title from "@/app/components/common/Title";
import Paragraph from "@/app/components/common/Text/Paragraph";
import RelativeLayout from "@/app/components/exhibition/RelativeLayout";
import GalleryList from "@/app/components/gallery/GalleryList";
import Pagination from "@/app/components/pagination/Pagination";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import { API } from "@/utils/domain";
import { Artist } from "@/types";

export default async function page({ params }: { params: { id: string } }) {
  let artistInfo: Artist | null = null;
  const response = await fetch(`${API}/api/enduser/artist/${params?.id}`)
    .then((res) => res.json())
    .catch((error) => console.log("artist detail error", error));

  if (response?.success) {
    artistInfo = response?.data;
  }

  return (
    <Layout className="lg:px-16 pb-10">
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Artists", url: "/artists", active: true },
          {
            name: "Artist Details",
            url: `/artist/${params.id}`,
            active: false,
          },
        ]}
      />

      <MainLayout className="flex  flex-col lg:flex-row items-starts lg:gap-[60px]">
        <Image
          src={
            artistInfo?.profile_image ??
            "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          }
          alt="Profile image"
          width={400}
          height={400}
          className="aspect-square w-1/2 lg:w-full mb-6 border-[0.5px] border-primary border-opacity-20 p-1"
        />
        <div className="translate-y-12">
          <Title className="text-primary">{artistInfo?.name}</Title>
          <p className="text-[#BA5006] text-xs mt-[10px] lg:text-lg font-medium ">
            {/* {artistInfo?.name} */}
          </p>
          <Paragraph className="text-[#BA5006] text-sm font-normal leading-relaxed mt-5 lg:mt-6 lg:font-base">
            {artistInfo?.description}
          </Paragraph>
          <Link href={`/artists/${params.id}/contact`}>
            <button className="text-white py-[14px] mt-10 px-6 lg:mt-6 bg-primary text-xs lg:text-lg lg:px-[36px] lg:py-[18px]">
              Contact Now
            </button>
          </Link>
        </div>
      </MainLayout>
      <hr />
      {/* <RelativeLayout
        href="/collection"
        mobileText="See all"
        title="Her Artworks"
      >
        <GalleryList data={artistInfo?.} />
      </RelativeLayout> */}
    </Layout>
  );
}
