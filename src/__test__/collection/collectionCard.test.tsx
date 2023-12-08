import React from "react";
import { render } from "@testing-library/react";
import CollectionCard from "../../app/components/cards/CollectionCard";

test("renders CollectionCard component correctly", () => {
  const testData = {
    title: "Test Title",
    image: "https://example.com/test-image.jpg",
    href: "/test-link",
  };

  const { getByText, getByAltText } = render(<CollectionCard {...testData} />);

  expect(getByAltText("collection poster")).toBeInTheDocument();
  expect(getByText("Test Title")).toBeInTheDocument();
});
