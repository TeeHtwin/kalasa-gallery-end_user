import Layout from "../../components/common/Layout";
import { Suspense } from "react";
import HeroSearch from "@/components/HeroSearch/HeroSearch";
import { fetchTotalData } from "@/data/data";
import Pagination from "@/components/pagination/Pagination";
import Loading from "@/components/common/Loading";
import ArtistList from "@/components/artist/ArtistList";

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
  // const totalPages = await fetchTotalData(query, 'artist');  

  return (
    <>
      <Layout>
        <HeroSearch
          name="Our Artists"
          placeholder="Search Artist..."
          setKeyword={query}
          page="artist"
        />
        <Suspense fallback={<Loading />}>
          <ArtistList query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={1} />
        </div>
      </Layout>
    </>
  );
};

export default page;