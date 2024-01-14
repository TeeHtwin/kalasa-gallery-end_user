"use client";

import React from "react";
import ExhibitionCard from "../cards/ExhibitionCard";
import { useInfiniteQuery } from "react-query";
import { fetchApi } from "@/fetchers/api";
import Loading from "../common/Loading";
import { Event } from "@/types";
type EventListProps = {
  data: Event[];
};

const EventList = ({ data }: EventListProps) => {
  return (
    <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px]">
      {data.map((event: Event, index: number) => (
        <ExhibitionCard key={index} info={event} />
      ))}
    </div>
  );
};

export default EventList;
