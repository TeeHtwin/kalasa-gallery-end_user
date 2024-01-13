"use client";

import React, { useMemo } from "react";
import CollectionCard from "../cards/CollectionCard";
import { Collection } from "@/types";

interface CollectionsProps {
  data: Collection[] | null;
}
const Collection = ({ data }: CollectionsProps) => {
  const getColumnCount = (partition: number) =>
    data
      ? data?.length >= partition
        ? partition
        : data?.length % partition
      : 1;

  const columnCount = useMemo(() => getColumnCount(3), [data?.length]);

  return (
    <div
      data-testid="mocked-collection-card"
      className={`columns-2 lg:columns-${columnCount} gap-2 lg:gap-5 mt-5 lg:mt-10 w-full`}
    >
      {data?.map((singleData: Collection, index: number) => (
        <CollectionCard key={index} info={singleData} index={index} />
      ))}
    </div>
  );
};

export default Collection;
