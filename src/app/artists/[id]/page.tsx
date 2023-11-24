import Breadcrumbs from "@/app/components/common/Bredcrumbs";
import Layout from "@/app/components/common/Layout";
import MainLayout from "@/app/components/exhibition/MainLayout";
import React from "react";
import Image from "next/image";
import Title from "@/app/components/common/Title";
import Paragraph from "@/app/components/common/Text/Paragraph";
import ExhibitionLayout from "@/app/components/exhibition/ExhibitionLayout";
const page = () => {
  return (
    <Layout className="lg:px-16">
      <Breadcrumbs breadcrumbs={["Our Artists", "Artists Detail"]} />

      <MainLayout className="flex  flex-col lg:flex-row items-starts lg:items-center lg:gap-[60px]">
        <Image
          src={
            "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          }
          alt="Profile image"
          width={437}
          height={437}
          className="aspect-square w-1/2 lg:w-full mb-6 border-[0.5px] border-primary border-opacity-20 p-1"
        />
        <div>
          <Title className="text-primary lg:text-5xl">Sandra Khaing</Title>
          <p className="text-[#BA5006] text-xs font-medium mt-[10px] lg:mt-6 lg:text-2">
            Traditional Artist
          </p>
          <Paragraph className="text-[#BA5006] text-sm font-normal leading-relaxed mt-5 lg:mt-6 lg:font-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus
            vel a optio soluta asperiores dolorem nobis perspiciatis, quis
            consequatur reprehenderit officiis sapiente facilis eveniet? Tempore
            aspernatur ex omnis iste deleniti debitis consectetur, mollitia
            provident quam quaerat asperiores commodi dolores.
          </Paragraph>
          <button className="text-white py-[14px] mt-10 px-6 lg:mt-6 bg-primary text-xs lg:text-lg lg:px-[36px] lg:py-[18px]">
            Contact Now
          </button>
        </div>
      </MainLayout>
    </Layout>
  );
};

export default page;
