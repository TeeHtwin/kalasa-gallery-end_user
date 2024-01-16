import Title from "@/app/components/common/Title";
import { CalendarRange, Clock, Home, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import ExhibitionLayout from "@/app/components/exhibition/ExhibitionLayout";
import MainLayout from "@/app/components/exhibition/MainLayout";
import RelativeLayout from "@/app/components/exhibition/RelativeLayout";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import { API } from "@/utils/domain";
import { Event } from "@/types";
import { getEventDate } from "@/utils";
import ExhibitionCard from "@/app/components/cards/ExhibitionCard";

export default async function page({ params }: { params: { id: string } }) {
  let eventInfo: Event | null = null;
  let eventTime = "";
  const response = await fetch(`${API}/api/enduser/event/${params?.id}`)
    .then((res) => res.json())
    .catch((error) => console.log("event detail error", error));
  if (response?.success) {
    eventInfo = response?.data;
    if (eventInfo) {
      const { opening_datetime, closing_datetime } = eventInfo;
      eventTime = getEventDate(opening_datetime, closing_datetime);
    }
  }

  return (
    <ExhibitionLayout>
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Events", url: "/events", active: true },
          { name: "Event Details", url: `/events/${params.id}`, active: false },
        ]}
      />
      <MainLayout className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
        <Image
          src={eventInfo?.image ?? ""}
          width={1024}
          height={1024}
          alt="Detail image"
          quality={100}
          className="w-full h-full object-cover"
        />

        <div className="text-primary flex flex-col gap-y-[24px] my-auto">
          <Title>{eventInfo?.title}</Title>
          <p>{eventInfo?.description}</p>
          <div className="flex flex-col gap-y-[16px]">
            <div className="flex items-center gap-[16px]">
              <CalendarRange />
              <span className="">{eventTime}</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <Clock />
              <span>12 AM to 4:30 PM</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <MapPin />
              <span>At {eventInfo?.location}</span>
            </div>
          </div>
          {eventInfo?.status && (
            <Link href={`/events/${params.id}/contact`}>
              <button className="text-white p-[8px] bg-primary w-[220px] py-2.5">
                Inquiry To Come
              </button>
            </Link>
          )}
        </div>
      </MainLayout>
      <RelativeLayout title="Related Events">
        <div className="mt-5 lg:mt-20 flex justify-between w-full gap-[10px] flex-col lg:flex-row">
          {eventInfo?.related &&
            eventInfo?.related.map((info: Event, index: number) => (
              <ExhibitionCard key={index} info={info} />
            ))}
        </div>
      </RelativeLayout>
    </ExhibitionLayout>
  );
}
