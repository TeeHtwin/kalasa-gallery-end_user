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
          "border-primary w-[666px] h-[58px] border-[1.5px] bg-transparent outline-none px-5 text-primary input"
        )}
      />
      <div className=" absolute right-[40px] top-[18px]">
        <Search className=" text-primary" />
      </div>
    </div>
  );
};

export default SearchBar;
