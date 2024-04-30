import Layout from "../../components/common/Layout";
import { Suspense } from "react";
import HeroSearch from "@/components/HeroSearch/HeroSearch";
import { fetchTotalData } from "@/data/data";
import Pagination from "@/components/pagination/Pagination";
import Loading from "@/components/common/Loading";
import EventList from "@/components/event/EventList";

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
  const totalPages = await fetchTotalData(query, "event");

  return (
    <>
      <Layout>
        <HeroSearch
          name="Our Events"
          placeholder="Search Event..."
          setKeyword={query}
          page="event"
        />
        <Suspense fallback={<Loading />}>
          <EventList query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </Layout>
    </>
  );
};

export default page;
