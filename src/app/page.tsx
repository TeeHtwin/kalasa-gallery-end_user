import React from "react";
import Title from "./components/common/Title";
import OutlineBtnHero from "./components/button/OutlineBtnHero";
import LinkBtn from "./components/button/LinkBtn";
import Layout from "./components/common/Layout";
import Exhibition, {
  ExhibitionCardProps,
} from "./components/cards/ExhibitionCard";
import Paragraph from "./components/common/Text/Paragraph";
import Image from "next/image";
import aboutUs from "@/../public/img/aboutUs.png";
// import PhotoGallery from "./components/photoLayout/PhotoGallery";
import ContactUs from "./components/contactUs/ContactUs";
import CollectionCard from "./components/cards/CollectionCard";
import Collection from "./components/collection/Collection";
import GalleryList from "./components/gallery/GalleryList";

export const dummyData: ExhibitionCardProps[] = [
  {
    src: "https://via.placeholder.com/600/92c952",
    title: "Art Exhibition 1",
    date: "August 19 to 23, 2023",
    place: "Art Gallery A",
    alt: "Artwork 1",
    href: "/exhibition/1",
  },
  {
    src: "https://via.placeholder.com/600/24f355",
    title: "Sculpture Showcase",
    date: "August 19 to 23, 2023",
    place: "Sculpture Park B",
    alt: "Sculpture 2",
    href: "/exhibition/2",
  },
  {
    src: "https://via.placeholder.com/600/f66b97",
    title: "Photography Expo",
    date: "August 19 to 23, 2023",
    place: "Photo Studio C",
    alt: "Photograph 3",
    href: "/exhibition/3",
  },
];

const artworkList = [
  {
    id: 1,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://images.unsplash.com/photo-1700744228339-03c725f5ee57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Art of Mother by Wood",
    artist: "Khin Maung Yin",
    size: "(18 x 24) inches AC",
    thumbnail:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
];

const dammyImages = [
  {
    title: "Image 1",
    image: "https://placekitten.com/200/600",
    href: "/collections/image1",
  },
  {
    title: "Image 2",
    image: "https://placekitten.com/600/200",
    href: "/collections/image2",
  },
  {
    title: "Image 3",
    image: "https://placekitten.com/800/1200",
    href: "/collections/image3",
  },
  {
    title: "Image 4",
    image: "https://placekitten.com/700/1000",
    href: "/collections/image4",
  },
  {
    title: "Image 5",
    image: "https://placekitten.com/400/600",
    href: "/collections/image5",
  },
  {
    title: "Image 6",
    image: "https://placekitten.com/600/800",
    href: "/collections/image6",
  },
];
const page = () => {
  return (
    <>
      <main className="h-screen bg-right w-full bg-[url('../../public/img/smallBackground.jpg')] lg:bg-[url('../../public/img/Background.jpg')] bg-cover bg-fixed relative p-0 m-0 flex items-center justify-center flex-col gap-10">
        <div className=" flex-col justify-start items-center gap-4 lg:gap-10 inline-flex lg:w-[900px]">
          <Title className="text-white text-[32px] lg:text-[88px] font-bold">
            Kalasa Art Space
          </Title>
          <Title className=" text-center text-amber-100 text-lg lg:text-5xl font-bold">
            A Space where there is Heart, there is Art
          </Title>
          <p className="text-center w-full text-white text-sm  lg:text-xl font-medium font-inter leading-[26px] lg:leading-10 px-[14px]">
            We need to work then give time for Heart. If you would love to feed
            your soul and heart, don’t forget to visit Kalasa Art. You can enjoy
            various art works for your soul and fresh healthy juice for your
            body here. Don’t miss it out, my dear all. We open daily 9:30 Am to
            9:00 Pm daily.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <OutlineBtnHero>Upcoming Exhibitions</OutlineBtnHero>
          <OutlineBtnHero>This is a right arrow: &rarr;</OutlineBtnHero>
        </div>
      </main>
      <Layout>
        <div className="flex items-center justify-between">
          <Title className="text-primary lg:text-5xl">Upcoming Events</Title>
          <LinkBtn
            href="/events"
            mobileText="See all"
            dtText="View All Exhibitions &rarr;"
          />
        </div>
        <div className="mt-5 lg:mt-20 flex justify-between w-full gap-2 flex-col lg:flex-row">
          {dummyData.map((data, index) => (
            <Exhibition key={index} {...data} />
          ))}
        </div>
      </Layout>
      <Layout className="lg:p-20 text-primary lg:text-5xl">
        <div className="flex justify-between">
          <Title>Expolre Our Collection</Title>
          <LinkBtn
            href="/collections"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        <Collection data={dammyImages} />
      </Layout>

      <Layout className="lg:p-0 grid grid-cols-1 lg:grid-cols-2 bg-primary-light text-primary lg:text-5xl">
        <div className=" flex justify-center mb-4 lg:mb-0 lg:px-[102px]  flex-col">
          <Title className="mb-5">What is Kalasa</Title>
          <Paragraph className="lg:leading-normal leading-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod
            explicabo repudiandae enim provident. Magni ipsa maiores porro est
            natus debitis consequuntur nam voluptatibus, recusandae magnam.
            Perspiciatis sapiente eius atque officiis amet mollitia dolor iure
            exercitationem inventore aspernatur eaque porro quo omnis, non
            maxime cumque earum? Ipsa aperiam quos autem?
          </Paragraph>
        </div>
        <Image
          src={aboutUs}
          width={756}
          height={756}
          className="lg:aspect-square bg-contain bg-neutral-light aspect-[3/2] p-[22px] lg:p-0"
          alt="about us"
        />
      </Layout>
      <Layout>
        <div className="flex justify-between">
          <Title className="text-primary">Our Artwork Collection</Title>
          <LinkBtn
            href="/collections"
            dtText="View All Collection"
            mobileText="See all"
          />
        </div>
        <GalleryList data={artworkList} />
      </Layout>
      <ContactUs />
    </>
  );
};

export default page;
