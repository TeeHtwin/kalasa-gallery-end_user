import React from "react";
import CollectionCard from "../cards/CollectionCard";
import { Collection } from "@/types";

interface CollectionsProps {
  data: Collection[] | null;
}
const Collection = ({ data }: CollectionsProps) => {
  return (
    <div
      data-testid="mocked-collection-card"
      className="grid lg:grid-cols-3 grid-cols-2 gap-2 lg:gap-5 mt-5 lg:mt-10 w-full"
    >
      {data?.map((singleData: Collection, index: number) => (
        <CollectionCard key={index} info={singleData} index={index} />
      ))}
    </div>
  );
};

export default Collection;
