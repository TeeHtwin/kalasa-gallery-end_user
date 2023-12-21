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
    <div>
      <Collection data={collections ?? null} />
      <div className="mt-10 lg:mt-20">
        <Pagination totalPages={5} />
      </div>
    </div>
  );
};

export default CollectionPage;
