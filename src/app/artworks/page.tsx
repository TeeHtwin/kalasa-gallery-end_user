import Layout from "../../components/common/Layout";
import { Suspense } from "react";
import Link from "next/link";
import HeroSearch from "@/components/HeroSearch/HeroSearch";
import GalleryList from "@/components/gallery/GalleryList";
import { fetchTotalData } from "@/data/data";
import Pagination from "@/components/pagination/Pagination";
import Loading from "@/components/common/Loading";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const { query = "", page = "1" } = (await searchParams) ?? {};
  const currentPage = Number(page) || 1;
  const totalPages = await fetchTotalData(query, "artwork");
  console.log(page);

  return (
    <>
      <Layout>
        <HeroSearch
          name="Our Artworks"
          placeholder="Search Artwork..."
          setKeyword={query}
          page="artwork"
        />
        <Suspense fallback={<Loading />}>
          <GalleryList query={query} currentPage={currentPage} />
        </Suspense>
        <Pagination totalPages={totalPages} />
      </Layout>
    </>
  );
};

export default page;
