import React from "react";
import CollectionCard from "../cards/CollectionCard";
import { memo } from "react";

interface CollectionProps {
  data: Array<{
    title: string;
    image: string;
    href?: string;
  }>;
}

const Collection: React.FC<CollectionProps> = ({ data }) => {
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

export default memo(Collection);
