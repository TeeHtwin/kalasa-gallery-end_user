import React from "react";
import CollectionCard from "../cards/CollectionCard";
import NoResult from "@/app/components/common/NoResult";

interface CollectionProps {
  data: {
    title: string;
    image: string;
    href: string;
  }[];
}

const Collection = ({ data }: CollectionProps) => {
  return (
    <div
      data-testid="mocked-collection-card"
      className="columns-2 lg:columns-3 gap-2 lg:gap-5 mt-5 lg:mt-20 w-full"
    >
      {data.map((singleData) => (
        <CollectionCard key={singleData.image} {...singleData} />
      ))}
    </div>
  );
};

export default Collection;
