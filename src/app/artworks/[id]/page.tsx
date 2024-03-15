import Image from "next/image";
import profile from "@/app/artworks/[id]/artist_profile.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import MainLayout from "@/app/components/exhibition/MainLayout";
import RelativeLayout from "@/app/components/exhibition/RelativeLayout";
import Layout from "@/app/components/common/Layout";
import clsx from "clsx";
import { API } from "@/utils/domain";
import { Artwork } from "@/types";

export default async function page({ params }: { params: { id: string } }) {
  const { data: artwork }: { data: Artwork } = await fetch(
    `${API}/api/enduser/artwork/${params?.id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log("artwork detail error", error));

  // status for the artwork is available or not

  return (
    <Layout className="lg:px-20 pb-10">
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Artworks", url: "/artworks", active: true },
          {
            name: "Artwork Details",
            url: `/artworks/${params.id}`,
            active: false,
          },
        ]}
      />

      <MainLayout className="flex flex-col lg:flex-row items-starts gap-5 sm:gap-[60px]  text-primary">
        <Image
          src={artwork?.image}
          width={600}
          height={400}
          alt="collection poster"
          className="object-cover w-full"
        />
        <div className="w-full flex flex-col justify-center content-center gap-7">
          <div className="flex justify-start items-center gap-4">
            <p className="font-serif text-2xl sm:text-5xl font-normal inline-flex">
              {artwork?.name}
            </p>
            <div
              className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${clsx(
                artwork?.status
                  ? "bg-green-900 text-green-300"
                  : "bg-red-900 text-red-100"
              )}  h-5 sm:h-6`}
            >
              <span
                className={`w-2 h-2 me-1 ${clsx(
                  artwork?.status ? "bg-green-500" : "bg-red-500"
                )}  rounded-full `}
              ></span>
              {clsx(artwork?.status ? "Available" : "Sold Out")}
            </div>
          </div>
          <div className="inline-flex items-center gap-4">
            <Image
              width={300}
              height={100}
              className="w-10 h-10 rounded-full"
              src={profile}
              alt="Rounded avatar"
            />
            <p className="font-sans text-xs sm:text-2xl text-[#BA5006]">
              Artist {artwork?.artist.name}
            </p>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006] ">
            {artwork?.description}
          </p>

          {artwork?.status && (
            <Link
              href={{
                pathname: `/artworks/${params.id}/contact`
              }}
            >
              <button
                type="button"
                className={`text-white bg-primary px-7 py-3 block w-fit ${clsx(
                  artwork?.status ? "block" : "hidden"
                )}`}
              >
                Inquiry To Buy
              </button>
            </Link>
          )}
        </div>
      </MainLayout>

      <RelativeLayout title="Artworks">
        <div className=" text-primary py-4 flex items-start flex-wrap gap-4">
          {artwork?.related?.map((artwork, index) => (
            <div
              key={index}
              className="border-solid border-[1.5px] border-[#883B0A29] h-auto bg-neutral-light mb-4 sm:mb-0 grow basis-80"
            >
              <Image
                src={artwork.image}
                alt="artwork poster"
                width={400}
                height={200}
                className="object-cover w-full h-96 p-1"
              />
              <p className="p-4 font-semibold text-2xl">{artwork.name}</p>
              <div className="flex justify-between p-3">
                <div>
                  <p className="pb-1">By {artwork.artist.name}</p>
                  {/* <p className="text-sm">{artwork.info}</p> */}
                </div>
                <Link
                  href={`/artworks/${artwork.id}`}
                  className="border-solid border-[1.5px] border-primary py-3 px-7"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </RelativeLayout>
    </Layout>
  );
}
