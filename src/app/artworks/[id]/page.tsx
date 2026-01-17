import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Link from "next/link";
import MainLayout from "@/components/exhibition/MainLayout";
import RelativeLayout from "@/components/exhibition/RelativeLayout";
import Layout from "@/components/common/Layout";
import clsx from "clsx";
import { API } from "@/utils/domain";
import { Artwork } from "@/types";
import GalleryCard from "@/components/cards/GalleryCard";
import FullscreenImage from "@/components/fullscreenImage/fullscreenImage";

export default async function page({ params }: { params: { id: string } }) {
  // 1. Fetching logic separated for safety
  let artwork: Artwork | null = null;

  try {
    const res = await fetch(`${API}/api/enduser/artwork/${params?.id}`);

    if (res.ok) {
      const result = await res.json();
      artwork = result.data;
    }
  } catch (error) {
    console.error("artwork detail error", error);
  }

  // 2. Handle the case where artwork is not found
  if (!artwork) {
    return (
      <Layout className="lg:px-20 pb-10">
        <div className="py-20 text-center">
          <p className="text-xl font-serif">Artwork not found.</p>
          <Link href="/artworks" className="text-primary underline mt-4 block">
            Return to Gallery
          </Link>
        </div>
      </Layout>
    );
  }

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

      <MainLayout className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-[60px] text-primary">
        <FullscreenImage src={artwork.image} />

        <div className="w-full flex flex-col justify-center content-center gap-7">
          <div className="flex justify-start items-center gap-4">
            <h1 className="font-serif text-2xl sm:text-5xl font-normal inline-flex">
              {artwork.name}
            </h1>
            <div
              className={clsx(
                "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full h-5 sm:h-6",
                artwork.sold
                  ? "bg-red-900 text-red-100"
                  : "bg-green-800/70 text-white"
              )}
            >
              <span
                className={clsx(
                  "w-2 h-2 me-1 rounded-full",
                  artwork.sold ? "bg-red-500" : "bg-green-500"
                )}
              ></span>
              {artwork.sold ? "Sold Out" : "Available"}
            </div>
          </div>

          <div className="inline-flex items-center gap-4">
            {artwork.artist?.profile_image && (
              <Image
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                src={artwork.artist.profile_image}
                alt={artwork.artist.name || "Artist profile"}
              />
            )}
            <p className="font-sans text-xs sm:text-2xl text-[#BA5006]">
              Artist {artwork.artist?.name}
            </p>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
            {artwork.description}
          </p>

          <div className="space-y-1">
            <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
              Year: {artwork.year}
            </p>
            <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
              Medium: {artwork.medium}
            </p>
            <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
              Size: {artwork.size}
            </p>
          </div>

          {!artwork.sold && (
            <Link href={`/artworks/${params.id}/contact`}>
              <button
                type="button"
                className="text-white bg-primary px-7 py-3 block w-fit hover:bg-opacity-90 transition-all"
              >
                Inquiry To Buy
              </button>
            </Link>
          )}
        </div>
      </MainLayout>

      {artwork.related && artwork.related.length > 0 && (
        <RelativeLayout title="Related Artworks">
          <div className="text-primary columns-2 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 mt-5 lg:mt-10">
            {artwork.related.map((item) => (
              <GalleryCard key={item.id} info={item} />
            ))}
          </div>
        </RelativeLayout>
      )}
    </Layout>
  );
}
