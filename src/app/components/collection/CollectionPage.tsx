"use client";

import React from "react";
import Pagination from "@/app/components/pagination/Pagination";
import Collection from "./Collection";
import { useQuery } from "react-query";
import { fetchCollection } from "@/fetchers";
import Loading from "../common/Loading";

type Props = {};

const CollectionPage = (props: Props) => {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: () => fetchCollection(),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Collection data={collections ?? null} />
      <div className="mt-5 lg:mt-10">
        <Pagination totalPages={5} />
      </div>
    </>
  );
};

export default CollectionPage;
