import Image from "next/image";
import React from "react";
import TitleInter from "../common/Text/TitleInter";
import Paragraph from "../common/Text/Paragraph";
import LinkBtn from "../button/LinkBtn";
import { Event } from "@/types";
import { DateTime } from "luxon";

const ExhibitionCard = ({ info }: { info: Event }) => {
  const {
    id,
    title,
    description,
    from_date,
    to_date,
    start_time,
    end_time,
    gallery,
    image,
    related,
  } = info;
  const eventTime = DateTime.fromFormat(from_date, "yyyy-MM-dd").toFormat(
    "MMMM dd"
  );
  return (
    <div className="px-4 pt-2 pb-8 w-full lg:pb-11 border border-opacity-20 border-primary">
      <Image
        width={421}
        height={421}
        src={image}
        alt={`event ${id}`}
        className="aspect-[4/3] h-auto lg:aspect-square bg-cover bg-center w-full"
      />
      <TitleInter className="mt-4">{title}</TitleInter>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col gap-2">
          <Paragraph>{from_date}</Paragraph>
          <Paragraph>At {gallery}</Paragraph>
        </div>

        <div className="py-2">
          <LinkBtn
            className="lg:px6 text-xs lg:text-base flex justify-center items-center"
            href={`/events/${id}`}
            mobileText="More Detail"
            dtText="More Detail"
          />
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
