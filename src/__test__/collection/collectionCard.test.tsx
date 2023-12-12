import React from "react";
import { render } from "@testing-library/react";
import CollectionCard from "../../app/components/cards/CollectionCard";

test("renders CollectionCard component correctly", () => {
  const testData = {
    title: "Test Title",
    image: "https://example.com/test-image.jpg",
    href: "/test-link",
  };

  const { getByText, getByAltText, getByTestId } = render(
    <CollectionCard {...testData} />
  );
  const collectionLink = getByTestId("collection-link");

  expect(getByAltText("collection poster")).toBeInTheDocument();
  expect(getByText("Test Title")).toBeInTheDocument();
  expect(collectionLink).toHaveAttribute("href", "/test-link");
});
