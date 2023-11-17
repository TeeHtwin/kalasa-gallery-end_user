import React from "react";
import Title from "./Title";
import SearchBar from "../search/SearchBar";

const SectionHeader = () => {
  return (
    <div className=" flex justify-between">
      <Title className=" text-primary">Our Events</Title>
      <SearchBar placeholder="Search Exhibitions ..." />
    </div>
  );
};

export default SectionHeader;
