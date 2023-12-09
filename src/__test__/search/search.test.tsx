import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/app/components/search/SearchBar";
import { debug } from "console";
import { userEvent } from "@testing-library/user-event";

// Mock useRouter, useSearchParams, usePathname:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  useSearchParams() {
    return {
      prefetch: () => null,
    };
  },
  usePathname() {
    return {
      prefetch: () => null,
    };
  },
}));

const setup = () => {
  const utils = render(
    <SearchBar
      className="mb-5 md:mb-0 order-1 lg:order-2"
      placeholder={`Search Artists...`}
    />
  );
  const input = screen.getByPlaceholderText("Search Artists...");
  return {
    input,
    ...utils,
  };
};

it("input starts empty", () => {
  const { input } = setup();

  expect(input).toBeNull;
});

it("accept the user input", async () => {
  const { input } = setup();

  await userEvent.type(input, "yangon");

  expect(input.value).toBe("yangon");
});

it("input value store as string", async () => {
  const { input } = setup();

  await userEvent.type(input, "11");

  expect(typeof input.value).toBe("string");
});
