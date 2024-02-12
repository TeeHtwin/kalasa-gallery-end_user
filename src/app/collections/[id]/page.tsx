import img from "@/app/collections/[id]/collection_poster.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Image from "next/image";
import FullscreenImage from "@/app/components/fullscreenImage/fullscreenImage";
import Layout from "@/app/components/common/Layout";
import MainLayout from "@/app/components/exhibition/MainLayout";
import RelativeLayout from "@/app/components/exhibition/RelativeLayout";
import { API } from "@/utils/domain";
import Loading from "@/app/components/common/Loading";
import { Collection } from "@/types";

export default async function page({ params }: { params: { id: string } }) {
  let collection: Collection | null = null;
  const response = await fetch(`${API}/api/enduser/collection/${params?.id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  if (response?.success) {
    collection = response?.data;
  }

  if (!collection) {
    return <Loading />;
  }

  return (
    <Layout className="lg:px-16 pb-10">
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Collection", url: "/collections", active: true },
          {
            name: "Collection Details",
            url: `/collection/${params.id}`,
            active: false,
          },
        ]}
      />
      <MainLayout className="flex  flex-col lg:flex-row items-starts lg:gap-[60px]">
        <div className="flex flex-col md:flex-row gap-10 items-center grow">
          <FullscreenImage src={collection?.image} />
          <div className="w-full">
            <p className="font-serif text-xl sm:text-5xl font-normal">
              {collection?.title}
            </p>
            <p className="font-sans text-xs sm:text-2xl text-[#BA5006] py-3 sm:py-10">
              Early 1890 - 1900
            </p>
            <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
              {collection.description}
            </p>
          </div>
        </div>
      </MainLayout>
      <RelativeLayout
        href="/collection"
        mobileText="See all"
        title="Related Collections"
      >
        <div className="py-4 sm:py-20 flex items-start flex-wrap gap-4">
          {collection.related.map((collection) => (
            <div
              key={collection.id}
              className="border-solid border-[1.5px] border-[#883B0A29] h-auto bg-neutral-light mb-4 sm:mb-0 grow basis-80"
            >
              <Image
                src={collection.image}
                alt="collection poster"
                width={400}
                height={200}
                className="object-cover w-full h-96 p-1"
              />
              <p className="font-sans px-4 py-8 font-medium text-2xl">
                {collection.title}
              </p>
            </div>
          ))}
        </div>
      </RelativeLayout>
      {/* <section className="m-auto text-primary px-4 sm:px-10 lg:px-18 max-w-screen-2xl"> */}

      {/* </section> */}
    </Layout>
  );
}
