"use client";

import { cn } from "@/app/lib/utils";
import React, { useState } from "react";

interface PaginationProps {
  pages: number[];
}

const Pagination = ({ pages }: PaginationProps) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className=" flex justify-center items-center mt-10">
      <div className=" flex w-[225px] h-[32px] md:w-[408px] md:-[56px] justify-center items-center gap-[6px]">
        <button className=" w-[112px] h-[56px] border-[1px] border-primary text-primary flex justify-center items-center gap-[16px]">
          <span className=" md:inline hidden">{"<"}</span>
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={cn(
              " w-[56px] h-[56px] border-[1px] border-primary text-primary",
              activePage === page && " bg-primary text-white"
            )}
          >
            {page}
          </button>
        ))}
        <button className=" w-[112px] h-[56px] border-[1px] border-primary text-primary flex justify-center items-center gap-[16px]">
          Next
          <span>{">"}</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
