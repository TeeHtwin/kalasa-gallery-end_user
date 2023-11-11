import React from "react";
import Title from "./components/common/Title";
import OutlineBtnHero from "./components/button/OutlineBtnHero";
import LinkBtn from "./components/button/LinkBtn";
import Layout from "./components/common/Layout";
import Exhibition, {
  ExhibitionCardProps,
} from "./components/cards/ExhibitionCard";

const page = () => {
  const dummyData: ExhibitionCardProps[] = [
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
  return (
    <>
      <main className="h-screen bg-right w-full bg-[url('../../public/img/Background.png')] bg-cover bg-fixed relative p-0 m-0 flex items-center justify-center flex-col gap-10">
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
        <div className="mt-5 lg:mt-20 flex justify-between w-full flex-col lg:flex-row">
          {dummyData.map((data, index) => (
            <Exhibition key={index} {...data} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default page;
