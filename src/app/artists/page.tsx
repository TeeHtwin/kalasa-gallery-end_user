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
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const { query = "", page = "1" } = (await searchParams) ?? {};
  const currentPage = Number(page) || 1;
  const totalPages = await fetchTotalData(query, "artist");

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
          <Pagination totalPages={totalPages} />
        </div>
      </Layout>
    </>
  );
};

export default page;
