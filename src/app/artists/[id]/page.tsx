import Layout from "@/components/common/Layout";
import MainLayout from "@/components/exhibition/MainLayout";
import React from "react";
import Image from "next/image";
import Title from "@/components/common/Title";
import Paragraph from "@/components/common/Text/Paragraph";
import RelativeLayout from "@/components/exhibition/RelativeLayout";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { API } from "@/utils/domain";
import { Artist } from "@/types";
import GalleryCard from "@/components/cards/GalleryCard";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  let artistInfo: Artist | null = null;
  const { id } = await params;
  const response = await fetch(`${API}/api/enduser/artist/${id}`, {
    next: { revalidate: 3600 },
  })
    .then((res) => res.json())
    .catch((error) => console.log("artist detail error", error));

  if (response?.success) {
    artistInfo = response?.data;
  }

  return (
    <Layout className="">
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Artists", url: "/artists", active: true },
          {
            name: "Artist Details",
            url: `/artist/${id}`,
            active: false,
          },
        ]}
      />

      <MainLayout className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] ">
        <Image
          src={
            artistInfo?.profile_image ??
            "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          }
          alt="Profile image"
          width={700}
          quality={80}
          height={700}
          className="aspect-square w-1/2 lg:w-full mb-2 border-[0.5px] border-primary object-cover border-opacity-20 p-1"
        />
        <div className=" mt-3 flex flex-col justify-center">
          <Title className="text-primary">{artistInfo?.name}</Title>
          <p className="text-[#BA5006] text-xs lg:text-lg font-medium ">
            {/* {artistInfo?.total_artwork} */}
          </p>
          <Paragraph className="text-[#BA5006] text-sm font-normal leading-relaxed mb-10 lg:mt-6 lg:font-base">
            {artistInfo?.description}
          </Paragraph>
        </div>
      </MainLayout>
      <hr />
      {artistInfo?.artworks.length !== 0 ? (
        <RelativeLayout title={`${artistInfo?.name}'s Artworks`}>
          <div className="columns-2 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 lg:mt-10">
            {artistInfo?.artworks?.map((data) => (
              <GalleryCard info={data} key={data.id} />
            ))}
          </div>
        </RelativeLayout>
      ) : null}
    </Layout>
  );
}
