"use client";

import React from "react";
import Pagination from "@/app/components/pagination/Pagination";
import Collection from "./Collection";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchCollection } from "@/fetchers";
import Loading from "../common/Loading";
import fetchApi from "@/fetchers/api";

type Props = {};

const CollectionPage = (props: Props) => {
  const {
    data: response,
    isSuccess,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["collections"],
    queryFn: ({ pageParam = 1 }) =>
      fetchApi(`enduser/collection/list?page=${pageParam}`),
    getNextPageParam: (lastPage, allPages) => {
      const { data: pagination } = lastPage;
      return pagination?.last_page > pagination?.current_page;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const { data: pagination } = firstPage;
      return pagination.from < pagination?.current_page;
    },
  });
  if (!isSuccess) {
    return <Loading />;
  }

  const apiResponse = response?.pages[0]["data"];
  const collections = apiResponse ? apiResponse?.data : [];
  return <Collection data={collections ?? null} />;
};

export default CollectionPage;
