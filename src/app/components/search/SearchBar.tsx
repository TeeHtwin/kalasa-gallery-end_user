"use client";

import { Search } from "lucide-react";
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

  const onClick = () => {
    try {
      if (!value) return;
      params.set("q", value);
      params.set("page", "1");
      router.push(`${pathname}?${params}`);
    } catch (error) {
      alert(error);
    } finally {
      setOpen(false);
    }
  };

  window.addEventListener("click", (e) => {
    if (!divRef.current?.contains(e.target as Node | null)) {
      setOpen(false);
    }
  });

  // useEffect(() => {
  //   const onOpenChange = (e: MouseEvent) => {
  //     if (!searchRef.current?.contains(e.target as Node | null)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", onOpenChange);

  //   return () => {
  //     document.removeEventListener("mousedown", onOpenChange);
  //   };
  // });

  return (
    <div className={cn("relative", className)} ref={divRef}>
      <div className="">
        <input
          type="text"
          placeholder={placeholder}
          onClick={() => setOpen(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onSuggestChange}
          className={cn(
            "border-primary text-[12px] md:text-lg w-[328px] h-[40px] md:w-[666px] md:h-[58px] border-[1.5px] bg-transparent outline-none px-5 text-primary input"
          )}
        />
        <button
          className=" absolute right-[15%] top-[20%] md:right-[40px] md:top-[18px]"
          type="button"
          onClick={onClick}
        >
          <Search className=" text-primary" />
        </button>
      </div>
      {open && (
        <div className="text-[12px] bg-neutral-light box-shadow absolute mt-3 border border-neutral-light md:text-lg w-[328px] flex flex-col md:w-[666px] pt-5 shadow-md">
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
