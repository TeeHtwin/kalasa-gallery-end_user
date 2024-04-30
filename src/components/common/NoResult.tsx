import React from "react";
import noResultFound from "@/../public/icons/noResultFound.png";
import Image from "next/image";

const NoResult = () => {
  return (
    <div className="flex flex-col gap-4 my-10 justify-center items-center h-full w-full text-primary">
      <h2>No Results Found.</h2>
      <Image
        src={noResultFound}
        alt="no result found"
        width={150}
        height={150}
      />
    </div>
  );
};

export default NoResult;
