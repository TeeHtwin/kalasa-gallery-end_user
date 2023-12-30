import Image from "next/image";
import img from "@/app/blogs/[id]/blog_img.png";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";

const blogs = [
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

const content = `Man face fruit divided seasons herb from herb moveth whose dominion gathered winged morning man. won’t had fly beginning. Winged have saying behold morning greater void shall created whose blessed herb light fruitful open void without itself whales.Good every beginning.

Man face fruit divided seasons herb from herb moveth whose dominion gathered winged morning man. won’t had fly beginning. Winged have saying behold morning greater void shall created whose blessed herb light fruitful open void without itself whales.Good every beginning.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque

Startups Are Still

Mollit anim id est laborum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam volupe.

Mollit anim id est laborum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam volupe.`;

const page = ({params}: { params: { id:string }}) => {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Our Blogs", url: "/blogs" },
          { name: "Blog Details", url: ''},
        ]}
      />
      <section className="text-primary max-w-screen-2xl m-auto">
        <div className="px-4 sm:px-10 lg:px-18">
          <Image src={img} alt="" width={700} height={475} className="m-auto" />
          <p className="font-sans text-xs sm:text-lg font-extralight text-left sm:text-center py-4 sm:py-16">
            By Sai Tun Oo | Sept 15, 2023
          </p>
          <div className="max-w-screen-xl m-auto">
            <p className="font-serif font-semibold text-xl sm:text-5xl text-left sm:text-center ">
              Portrait of Singer Htoo Eain Thin
            </p>
            <p className="py-4 sm:py-16 whitespace-pre-wrap">{content}</p>
          </div>
          <hr className="block sm:hidden" />
          <div className="py-8 sm:py-32">
            <div className="text-Brown flex justify-between">
              <p className="font-bold text-xl md:text-3xl font-serif">
                Related Blogs
              </p>
              <button className="hidden md:block border-[1.5px] border-primary font-medium font-serif text-lg px-5 py-1">
                See More →
              </button>
              <button className="block md:hidden">See More</button>
            </div>
            <div className="py-4 sm:py-20 flex items-start flex-wrap gap-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border-solid border-[1.5px] border-[#883B0A29] grow basis-80"
                >
                  <Image
                    src={blog.img}
                    alt="blog poster"
                    width={600}
                    height={800}
                    className="w-full object-cover h-[300px] sm:h-[400px]"
                  />
                  <div className="py-3 px-3">
                    <p className="font-sans text-base font-extralight">
                      By {blog.author} | {blog.date}
                    </p>
                    <p className="py-4 font-semibold text-2xl">{blog.title}</p>
                    <p>{blog.content.slice(0, 130)}...</p>
                    <button className="pt-5 text-lg font-sans font-medium">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
