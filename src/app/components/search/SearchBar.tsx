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
  const [active, setActive] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams.toString());

  const onSuggestChange = (place: string, i: number) => {
    setValue(place);
    setActive(i);
    setOpen(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!value) return;

      params.set("q", value);
      router.push(`${pathname}?${params}`);
    } catch (error) {
      alert(error);
    } finally {
      setOpen(false);
    }
  };

  window.addEventListener("click", (e) => {
    if (!formRef.current?.contains(e.target as Node | null)) {
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
    <form
      className={cn("relative", className)}
      ref={formRef}
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="">
        <input
          type="text"
          placeholder={placeholder}
          onClick={() => setOpen(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={cn(
            "border-primary text-[12px] md:text-lg w-[328px] h-[40px] md:w-[666px] md:h-[58px] border-[1.5px] bg-transparent outline-none px-5 text-primary input"
          )}
        />
        <button
          className=" absolute right-[15%] top-[20%] md:right-[40px] md:top-[18px]"
          type="submit"
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
                onClick={() => onSuggestChange(place, i)}
                key={place}
                className={cn(
                  " h-[40px] md:h-[70px] flex items-center px-10 text-primary hover:bg-primary-light",
                  active === i && "bg-primary-light"
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
    </form>
  );
};

export default SearchBar;
