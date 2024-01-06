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

const page = ({ params }: { params: { id: string } }) => {
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
  ];
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
            "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          }
          alt="Profile image"
          width={400}
          height={400}
          className="aspect-square w-1/2 lg:w-full mb-6 border-[0.5px] border-primary border-opacity-20 p-1"
        />
        <div className="translate-y-12">
          <Title className="text-primary">Sandra Khaing</Title>
          <p className="text-[#BA5006] text-xs mt-[10px] lg:text-lg font-medium ">
            Traditional Artist
          </p>
          <Paragraph className="text-[#BA5006] text-sm font-normal leading-relaxed mt-5 lg:mt-6 lg:font-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus
            vel a optio soluta asperiores dolorem nobis perspiciatis, quis
            consequatur reprehenderit officiis sapiente facilis eveniet? Tempore
            aspernatur ex omnis iste deleniti debitis consectetur, mollitia
            provident quam quaerat asperiores commodi dolores.
          </Paragraph>
          <Link href={`/artists/${params.id}/contact`}>
            <button className="text-white py-[14px] mt-10 px-6 lg:mt-6 bg-primary text-xs lg:text-lg lg:px-[36px] lg:py-[18px]">
              Contact Now
            </button>
          </Link>
        </div>
      </MainLayout>
      <hr />
      <RelativeLayout
        href="/collection"
        mobileText="See all"
        title="Her Artworks"
      >
        <GalleryList data={artworkList} />
        <div className="mt-10 hidden lg:block lg:mt-20">
          <Pagination totalPages={5} />
        </div>
      </RelativeLayout>
    </Layout>
  );
};

export default page;
