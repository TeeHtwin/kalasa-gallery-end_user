import img from "@/app/collections/[id]/collection_poster.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Image from "next/image";
import FullscreenImage from '@/app/components/fullscreenImage/fullscreenImage'

const collections = [
  {
    id: 11,
    img: "https://placekitten.com/400/600",
    title: "The Whispers of Legend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
    author: "Sai Tun Oo",
    date: "Sept 15, 2023",
  },

  {
    id: 13,
    img: "https://placekitten.com/800/1200",
    title: "The squares of balance in society",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
    author: "Sai Tun Oo",
    date: "Sept 15, 2023",
  },
  {
    id: 12,
    img: "https://placekitten.com/600/800",
    title: "Perception",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem quod aut placeat exercitationem, explicabo, labore nulla repudiandae aspernatur, aperiam recusandae neque quas sit cupiditate velit provident maxime sequi in.",
    author: "Sai Tun Oo",
    date: "Sept 15, 2023",
  },
];

const page = () => {
  return (
    <>
      <Breadcrumb />

      <section className="m-auto text-primary px-4 sm:px-10 lg:px-18 max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-10 items-center grow">
          <FullscreenImage src={img}/>
          <div className="w-full">
            <p className="font-serif text-xl sm:text-5xl font-normal">
              Fine China Tea-cup
            </p>
            <p className="font-sans text-xs sm:text-2xl text-[#BA5006] py-3 sm:py-10">
              Early 1890 - 1900
            </p>
            <p className="max-w-md font-sans text-sm sm:text-base text-[#BA5006]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              adipisci quia hic nulla illo dolore accusantium, enim nostrum
              tenetur numquam amet accusamus, rerum asperiores, sit est
              consequatur ea voluptas saepe!
            </p>
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
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="border-solid border-[1.5px] border-[#883B0A29] h-auto bg-neutral-light mb-4 sm:mb-0 grow basis-80"
              >
                <Image
                  src={collection.img}
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
        </div>
      </section>
    </>
  );
};
export default page;
