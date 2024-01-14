"use client";

import React from "react";
import ExhibitionCard from "../cards/ExhibitionCard";
import { useInfiniteQuery } from "react-query";
import {fetchApi} from "@/fetchers/api";
import Loading from "../common/Loading";
import { Event } from "@/types";
type Props = {};

const EventList = (props: Props) => {
  const {
    data: response,
    isSuccess,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["events"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/event/list?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const { data: pagination } = lastPage;
      return pagination?.last_page > pagination?.current_page;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const { data: pagination } = firstPage;
      return pagination?.from < pagination?.current_page;
    },
  });

  if (!isSuccess) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const events = apiResponse ? apiResponse?.data : [];
  console.log("events:", events);
  return (
    <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full gap-[10px]">
      {events.map((event: Event, index: number) => (
        <ExhibitionCard key={index} info={event} />
      ))}
    </div>
  );
};

export default EventList;
