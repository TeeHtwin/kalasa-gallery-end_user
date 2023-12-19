import Title from "@/app/components/common/Title";
import { dummyData } from "@/app/page";
import { CalendarRange, Clock, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Exhibition from "../../components/cards/ExhibitionCard";
import React from "react";
import ExhibitionLayout from "@/app/components/exhibition/ExhibitionLayout";
import MainLayout from "@/app/components/exhibition/MainLayout";
import RelativeLayout from "@/app/components/exhibition/RelativeLayout";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";

const ExhibitionDetailPage = () => {
  return (
    <ExhibitionLayout>
      <Breadcrumb />
      <MainLayout className=" grid grid-cols-1 items-center md:grid-cols-2 gap-[60px]">
        <Image
          src={
            "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          }
          width={650}
          height={650}
          alt="Detail image"
          className="aspect-[4/3] md:aspect-square"
        />

        <div className="text-primary flex flex-col gap-y-[24px] my-auto">
          <Title className="">Discovering The Beauty of Bangan</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            voluptatem repudiandae optio quo iste non nulla illum nisi qui eum
            neque harum, modi ipsum provident iusto rerum ullam ratione quasi
            animi accusamus molestiae voluptas reiciendis. Esse quasi placeat
            incidunt animi laborum, maxime error nulla quisquam sit veritatis
            ipsa sequi ea vero temporibus dignissimos minima excepturi dolorem
            quas vel adipisci itaque eius. Laboriosam asperiores et at amet
            corporis aliquid reiciendis vitae, iure cumque alias, provident
            distinctio soluta possimus ab? Illum harum accusantium accusamus aut
            praesentium porro earum id quod facere itaque enim maxime sequi, non
            adipisci excepturi obcaecati ipsum nesciunt atque. Provident
            blanditiis explicabo numquam, optio iure debitis nihil placeat. Vel
            qui saepe adipisci exercitationntium ducimus laborum mollitia cumque
            obcaeca
          </p>
          <div className="flex flex-col gap-y-[16px]">
            <div className="flex items-center gap-[16px]">
              <CalendarRange />
              <span className="">August 19 to 23,2023</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <Clock />
              <span>12 AM to 4:30 PM</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <MapPin />
              <span>At Kalasa Art Space</span>
            </div>
          </div>
          <button className="text-white p-[8px] bg-primary w-[213px] h-[74px]">
            Inquiry To Come
          </button>
        </div>
      </MainLayout>
      <RelativeLayout
        href="/exhibition"
        title="Related Events"
        dtText="see more"
        mobileText="see all"
      >
        <div className="mt-5 lg:mt-20 flex justify-between w-full gap-[10px] flex-col lg:flex-row">
          {dummyData.map((data, index) => (
            <Exhibition key={index} {...data} />
          ))}
        </div>
      </RelativeLayout>
    </ExhibitionLayout>
  );
};

export default ExhibitionDetailPage;
