import React from "react";
import Title from "./Title";
import SearchBar from "../search/SearchBar";

interface SectionHeaderProps {
  titleText: string;
  searchPlaceholder: string;
}
const SectionHeader = ({
  titleText,
  searchPlaceholder,
}: SectionHeaderProps) => {
  return (
    <div className=" flex justify-between">
      <Title className="lg:text-5xl text-primary">{titleText}</Title>
      <SearchBar
        className=" hidden md:inline"
        placeholder={`${searchPlaceholder} ...`}
      />
    </div>
  );
};

export default SectionHeader;
