import { Search } from "lucide-react";
import React from "react";
import { cn } from "@/app/lib/utils";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

const SearchBar = ({ placeholder, className }: SearchBarProps) => {
  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "border-primary text-[12px] md:text-lg w-[328px] h-[40px] md:w-[666px] md:h-[58px] border-[1.5px] bg-transparent outline-none px-5 text-primary input"
        )}
      />
      <div className=" absolute right-[30px] top-[9px] md:right-[40px] md:top-[18px]">
        <Search className=" text-primary" />
      </div>
    </div>
  );
};

export default SearchBar;
