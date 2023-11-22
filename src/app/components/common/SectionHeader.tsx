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
    <div className=" flex flex-col-reverse md:flex-row md:justify-between">
      <Title className="lg:text-5xl text-primary">{titleText}</Title>
      <SearchBar
        className=" mb-5 md:mb-0"
        placeholder={`${searchPlaceholder} ...`}
      />
    </div>
  );
};

export default SectionHeader;
