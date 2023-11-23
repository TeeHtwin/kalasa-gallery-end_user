"use client";

import { Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

export const dummyPlaces = [
  "Yangoon",
  "Bagan",
  "Mandalay",
  "Yangon",
  "China",
  "NayPyiTaw",
  "Taungyi",
];

const SearchBar = ({ placeholder, className }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams.toString());

  const onSuggestClick = (place: string) => {
    try {
      params.set("q", place);
      params.set("page", "1");
      router.push(`${pathname}?${params}`, { scroll: false });
    } catch (error) {
      alert(error);
    } finally {
      setValue("");
      setOpen(false);
    }
  };

  const onSuggestChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (selectedItem < dummyPlaces.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      }
      if (e.key === "ArrowDown" && selectedItem < dummyPlaces.length - 1) {
        setSelectedItem((prev) => prev + 1);
      }
      if (e.key === "Enter" && selectedItem >= 0) {
        params.set("q", dummyPlaces[selectedItem]);
        params.set("page", "1");
        router.push(`${pathname}?${params}`, { scroll: false });
        setValue("");
        setOpen(false);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  const onClose = () => {
    setOpen(false);
    setValue("");
  };

  window.addEventListener("click", (e) => {
    if (!divRef.current?.contains(e.target as Node | null)) {
      setOpen(false);
    }
  });

  return (
    <div className={cn("", className)} ref={divRef}>
      <div className="flex w-full py-[7px] px-5 lg:py-[17px] lg:px-8 border-[1.5px] border-primary justify-between items-center">
        <input
          type="text"
          placeholder={placeholder}
          onClick={() => setOpen(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onSuggestChange}
          className={cn(
            "text-xs md:text-lg bg-transparent outline-none text-primary input"
          )}
        />
        <div className=" ">
          {open ? (
            <X
              className=" text-primary hover:scale-110 transition cursor-pointer duration-200"
              onClick={onClose}
            />
          ) : (
            <Search className=" text-primary" />
          )}
        </div>
      </div>
      {open && (
        <div className="text-[12px] z-20 bg-neutral-light box-shadow absolute mt-3 border border-neutral-light md:text-lg w-[328px] flex flex-col md:w-[666px] pt-5 shadow-md">
          {dummyPlaces
            .filter((place) => {
              const searchKey = value.toLowerCase();
              const suggested_place = place.toLowerCase();
              return (
                searchKey &&
                suggested_place.includes(searchKey) &&
                suggested_place !== searchKey
              );
            })
            .map((place, i) => (
              <button
                type="button"
                onClick={() => onSuggestClick(place)}
                key={place}
                className={cn(
                  " h-[40px] md:h-[70px] flex items-center px-10 text-primary hover:bg-primary-light",
                  selectedItem === i && "bg-primary-light"
                )}
              >
                {place}
              </button>
            ))}
          <button
            type="button"
            onClick={() => {}}
            className={cn(
              "h-[40px] md:h-[70px] border-t-2 border-primary-light flex items-center px-10 text-primary hover:bg-primary-light"
            )}
          >
            {`Search full results for "${value}"`}
            <span className=" ms-5">{"->"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
