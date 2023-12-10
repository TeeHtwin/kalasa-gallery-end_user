import { render, screen } from "@testing-library/react"
import CollectionPage from '@/app/collections/page'
import Collection from '@/app/components/collection/Collection'

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

test("renders a title", () => {

    render(<CollectionPage />)

    const header = screen.getByText('Our Collections');

    expect(header).toBeInTheDocument();
})

test("renders empty page when data is empty", () => {
  render(<Collection data={[]} />)

  const emptyText = screen.getByText("No Results Found.");

  expect(emptyText).toBeInTheDocument();
})

test("renders collection data when there is data.", () => {
  const collectionData = [
    {
      title: "Image 1",
      image: "https://placekitten.com/200/600",
      href: "/collections/image1",
    },
    {
      title: "Image 2",
      image: "https://placekitten.com/600/200",
      href: "/collections/image2",
    },
    {
      title: "Image 3",
      image: "https://placekitten.com/800/1200",
      href: "/collections/image3",
    },
    {
      title: "Image 4",
      image: "https://placekitten.com/700/1000",
      href: "/collections/image4",
    },
    {
      title: "Image 5",
      image: "https://placekitten.com/400/600",
      href: "/collections/image5",
    },
    {
      title: "Image 6",
      image: "https://placekitten.com/600/800",
      href: "/collections/image6",
    },
    {
      title: "Image 7",
      image: "https://placekitten.com/300/500",
      href: "/collections/image7",
    },
    {
      title: "Image 8",
      image: "https://placekitten.com/500/300",
      href: "/collections/image8",
    },
    {
      title: "Image 9",
      image: "https://placekitten.com/700/700",
      href: "/collections/image9",
    },
  ];

  render(<Collection data={collectionData} />)

  const renderedItems = screen.getAllByRole('listitem');

  expect(renderedItems?.length).toEqual(collectionData?.length);

})