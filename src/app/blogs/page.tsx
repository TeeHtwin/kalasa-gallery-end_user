import Layout from "../../components/common/Layout";
import { Suspense } from "react";
import HeroSearch from "@/components/HeroSearch/HeroSearch";
import { fetchTotalData } from "@/data/data";
import Pagination from "@/components/pagination/Pagination";
import Loading from "@/components/common/Loading";
import BlogList from "@/components/blog/BlogList";

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
          name="Our Blogs"
          placeholder="Search Blog..."
          setKeyword={query}
          page="blog"
        />
        <Suspense fallback={<Loading />}>
          <BlogList query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={3} />
        </div>
      </Layout>
    </>
  );
};

export default page;
