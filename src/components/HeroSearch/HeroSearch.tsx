"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Autosuggest from "react-autosuggest";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

import { useMutation } from "react-query";
import { searchListApi } from "@/fetchers/api";

type HeroSearchProps = {
  name: string;
  placeholder: string;
  setKeyword: string;
  page: string;
  variant?: "default" | "compact";
  className?: string;
};

const HeroSearch = ({
  name,
  placeholder,
  setKeyword,
  page,
  variant = "default",
  className,
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

  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "block sm:flex justify-between items-center gap-8",
        isCompact ? "pb-0" : "pb-8",
        className,
      )}
    >
      {!isCompact && (
        <p className="font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-none text-primary">
          {name}
        </p>
      )}
      <div
        className={cn(
          "relative max-w-[600px] w-full flex-auto",
          isCompact ? "mt-0" : "mt-6 sm:mt-0",
        )}
      >
        <div className="flex items-center gap-3 rounded-md border border-primary/30 bg-white px-4 py-2 shadow-sm transition focus-within:border-primary/60 focus-within:shadow-[0_0_0_2px_rgba(136,59,10,0.12)]">
          <Image
            src="/icons/search.svg"
            width={16}
            height={16}
            alt="search"
            className="opacity-70"
          />
          <input
            className="w-full bg-transparent text-sm text-primary placeholder:text-primary/50 outline-none"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
            aria-label={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSearch;
