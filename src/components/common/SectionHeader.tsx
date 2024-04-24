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
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Title className="lg:text-3xl order-2 lg:order-1 text-primary">
        {titleText}
      </Title>
      <SearchBar
        className="m-0 order-1 lg:order-2"
        placeholder={`${searchPlaceholder} ...`}
      />
    </div>
  );
};

export default SectionHeader;
