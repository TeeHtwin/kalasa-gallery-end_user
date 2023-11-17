import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className=" relative">
      <input
        type="text"
        placeholder={placeholder}
        className="  border-primary w-[666px] h-[58px] border-[1.5px] bg-transparent outline-none px-5 text-primary input"
      />
      <div className=" absolute right-[40px] top-[18px]">
        <Search className=" text-primary" />
      </div>
    </div>
  );
};

export default SearchBar;
