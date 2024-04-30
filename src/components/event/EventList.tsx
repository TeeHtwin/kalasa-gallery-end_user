import React from "react";
import ExhibitionCard from "../cards/ExhibitionCard";
import { Event, ListPage } from "@/types";
import { fetchData } from "@/data/data";

const EventList = async ({ query, currentPage }: ListPage) => {
  const eventData = await fetchData(currentPage, query, "event");
  return (
    <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px]">
      {eventData?.map((event: Event, index: number) => (
        <ExhibitionCard key={event.id} info={event} />
      ))}
    </div>
  );
};

export default EventList;
