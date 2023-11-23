import React from "react";
import CollectionCard from "../cards/CollectionCard";

const Collection = ({ data }) => {
  return (
    <div className="columns-2 lg:columns-3 gap-2 lg:gap-5 mt-5 lg:mt-20 w-full">
      {data.map((singleData) => (
        <CollectionCard key={singleData.image} {...singleData} />
      ))}
    </div>
  );
};

export default Collection;
