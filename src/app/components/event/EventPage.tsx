"use client";

import React, { useState, useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchApi } from "@/fetchers/api";
import Loading from "../common/Loading";
import Layout from "../common/Layout";
import HeroSearch from "../HeroSearch/HeroSearch";
import EventList from "./EventList";

type Props = {};

const EventPage = (props: Props) => {
  const [keyword, setKeyword] = useState("");
  const {
    data: response,
    isFetching,
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

  useEffect(() => {
    fetchSearchKeyword(keyword);
  }, [keyword]);

  const fetchSearchKeyword = async (keyword: string) => {
    const response = await fetch(``);
  };

  if (isFetching) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const events = apiResponse ? apiResponse?.data : [];

  return (
    <Layout>
      <HeroSearch
        name="Our Events"
        placeholder="Search Event..."
        setKeyword={setKeyword}
      />
      <EventList data={events} />
    </Layout>
  );
};

export default EventPage;
