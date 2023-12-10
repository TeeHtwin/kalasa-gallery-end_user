import React from "react";
import CollectionCard from "../cards/CollectionCard";
import NoResult from '@/app/components/common/NoResult'

interface CollectionProps {
  data: {
    title: string,
    image: string,
    href: string
  }[]
}

const Collection = ({ data }: CollectionProps) => {
  return (
    <div role="list" className="columns-2 lg:columns-3 gap-2 lg:gap-5 mt-5 lg:mt-20 w-full">
      {data?.length > 0 ? (
        data.map((singleData) => (
          <CollectionCard key={singleData.image} {...singleData} />
        ))
      ): <NoResult />}
    </div>
  );
};

export default Collection;
