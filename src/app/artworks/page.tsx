import Layout from "../../components/common/Layout";
import { Suspense } from "react";
import HeroSearch from "@/components/HeroSearch/HeroSearch";
import GalleryList from "@/components/gallery/GalleryList";
import { fetchArtworksTotal } from "@/data/data";
import Pagination from "@/components/pagination/Pagination";
import Loading from "@/components/common/Loading";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchArtworksTotal(query);  

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
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </Layout>
    </>
  );
};

export default page;
