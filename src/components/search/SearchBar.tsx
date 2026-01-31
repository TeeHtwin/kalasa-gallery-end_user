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

  const suggested_places = dummyPlaces.filter((place) => {
    const searchKey = value.toLowerCase();
    const suggested_place = place.toLowerCase();
    return (
      searchKey &&
      suggested_place.includes(searchKey) &&
      suggested_place !== searchKey
    );
  });

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
    if (selectedItem < suggested_places.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      }
      if (e.key === "ArrowDown" && selectedItem < suggested_places.length - 1) {
        setSelectedItem((prev) => prev + 1);
      }
      if (e.key === "Enter") {
        params.set("q", suggested_places[selectedItem] || value);
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

  const onOpenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setOpen(true);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!divRef.current?.contains(e.target as Node | null)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={cn("relative", className)} ref={divRef}>
      <div className="flex w-full items-center gap-3 rounded-md border border-primary/30 bg-white px-4 py-2 shadow-sm transition focus-within:border-primary/60 focus-within:shadow-[0_0_0_2px_rgba(136,59,10,0.12)]">
        <Search className="h-4 w-4 text-primary/70" />
        <input
          type="text"
          placeholder={placeholder}
          onClick={() => setOpen(true)}
          value={value}
          onChange={onOpenChange}
          onKeyDown={onSuggestChange}
          className={cn(
            "w-full bg-transparent text-sm text-primary placeholder:text-primary/50 outline-none"
          )}
        />
        {open && (
          <button
            type="button"
            className="text-primary/70 transition hover:text-primary"
            onClick={onClose}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-primary/20 bg-white text-sm shadow-lg">
          {suggested_places.map((place, i) => (
            <button
              type="button"
              onClick={() => onSuggestClick(place)}
              key={place}
              className={cn(
                "flex h-10 items-center px-4 text-primary hover:bg-primary/5",
                selectedItem === i && "bg-primary/10"
              )}
            >
              {place}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {}}
            className={cn(
              "flex h-10 items-center border-t border-primary/10 px-4 text-primary/80 hover:bg-primary/5"
            )}
          >
            {`Search full results for "${value}"`}
            <span className="ms-2">{"→"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
