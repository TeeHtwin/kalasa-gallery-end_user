import img from "@/app/artworks/[id]/artwork_poster.png";
import Image from "next/image";
import profile from "@/app/artworks/[id]/artist_profile.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Link from "next/link";

const artworks = [
  {
    id: 11,
    img: "https://placekitten.com/400/600",
    title: "Art of Mother by Wood",
    info: "(18 x 24)inches A/c",
    author: "Sai Tun Oo",
  },

  {
    id: 13,
    img: "https://placekitten.com/800/1200",
    title: "Art of Mother by Wood",
    info: "(18 x 24)inches A/c",
    author: "Sai Tun Oo",
  },
  {
    id: 12,
    img: "https://placekitten.com/600/800",
    title: "Art of Mother by Wood",
    info: "(18 x 24)inches A/C",
    author: "Sai Tun Oo",
  },
];

const page = ({ params }: { params: { id: string } }) => {
  return (
    <section className="m-auto text-primary px-4 sm:px-10 lg:px-18 max-w-screen-2xl">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Our Artworks", url: "/artworks" },
          { name: "Artwork Details", url: `/artworks/${params.id}` },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-10 items-center grow">
        <Image
          src={img}
          width={600}
          height={400}
          alt="collection poster"
          className="object-cover w-full"
        />
        <div className="w-full">
          <p className="font-serif text-xl sm:text-5xl font-normal pb-4">
            Lake Life Artwork
          </p>
          <div className="inline-flex items-center gap-4 pb-4">
            <Image
              width={300}
              height={100}
              className="w-10 h-10 rounded-full"
              src={profile}
              alt="Rounded avatar"
            />
            <p className="font-sans text-xs sm:text-2xl text-[#BA5006] pb-4">
              Artist Khin Maung Yin
            </p>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006] pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            adipisci quia hic nulla illo dolore accusantium, enim nostrum
            tenetur numquam amet accusamus, rerum asperiores, sit est
            consequatur ea voluptas saepe!
          </p>
          <button
            type="button"
            className="text-white bg-green-600 px-7 py-3 block w-fit mb-4"
          >
            Available
          </button>
          <Link href={`/artworks/${params.id}/contact`}>
            <button
              type="button"
              className="text-white bg-primary px-7 py-3 block w-fit"
            >
              Inquiry To Buy
            </button>
          </Link>
        </div>
      </div>
      <div className="py-8 sm:py-32 px-4">
        <div className="text-Brown flex justify-between">
          <p className="font-bold text-xl md:text-5xl font-serif">
            Related Collections
          </p>
          <button className="hidden md:block border-[1.5px] border-primary font-medium font-serif text-lg px-9 py-4">
            See More →
          </button>
          <button className="block md:hidden">See all</button>
        </div>
        <div className="py-4 sm:py-20 flex items-start flex-wrap gap-4">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="border-solid border-[1.5px] border-[#883B0A29] h-auto bg-neutral-light mb-4 sm:mb-0 grow basis-80"
            >
              <Image
                src={artwork.img}
                alt="artwork poster"
                width={400}
                height={200}
                className="object-cover w-full h-96 p-1"
              />
              <p className="pb-8 font-semibold text-2xl pl-3">
                {artwork.title}
              </p>
              <div className="flex justify-between p-3">
                <div>
                  <p className="">By {artwork.author}</p>
                  <p>{artwork.info}</p>
                </div>
                <Link
                  href={artwork.id.toString()}
                  className="border-solid border-[1.5px] border-primary py-3 px-7"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default page;
