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
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const { query = "", page = "1" } = (await searchParams) ?? {};
  const currentPage = Number(page) || 1;
  const totalPages = await fetchTotalData(query, "blog");

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
          <Pagination totalPages={totalPages} />
        </div>
      </Layout>
    </>
  );
};

export default page;
