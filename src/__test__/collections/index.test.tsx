import { render, screen } from "@testing-library/react"
import CollectionPage from '@/app/collections/page'

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

it("renders a title", () => {

    render(<CollectionPage />)

    const header = screen.getByRole('heading', {
        name: "Our Collections",
        level: 1,
    })

    expect(header).toBeInTheDocument()
})