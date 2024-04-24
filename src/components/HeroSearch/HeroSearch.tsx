"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Autosuggest from "react-autosuggest";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import { useMutation } from "react-query";
import { searchListApi } from "@/fetchers/api";

type HeroSearchProps = {
  name: string;
  placeholder: string;
  setKeyword: string;
  page: string;
};

const HeroSearch = ({
  name,
  placeholder,
  setKeyword,
  page,
}: HeroSearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    // when the user types a new search query, reset the page number to 1.
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="block sm:flex  justify-between items-center gap-40 pb-8">
      <p className="font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-none text-primary">
        {name}
      </p>
      <div className="relative mt-6 sm:mt-0 max-w-[600px] w-full flex-auto">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none pr-3">
          <Image src="/icons/search.svg" width={25} height={25} alt="icon" />
        </div>
      </div>
    </div>
  );
};
export default HeroSearch;
