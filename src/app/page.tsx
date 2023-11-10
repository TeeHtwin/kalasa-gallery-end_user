import React from "react";
import Title from "./components/common/Title";
import OutlineBtnHero from "./components/button/OutlineBtnHero";
import LinkBtn from "./components/button/LinkBtn";

const page = () => {
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
      <section className="px-4 py-10 lg:py-[120px] lg:px-20">
        <div className="flex items-center justify-between">
          <Title className="text-primary lg:text-5xl ">Upcoming Events</Title>
          <LinkBtn
            href="/events"
            mobileText="See all"
            dtText="View All Exhibitions &rarr;"
          />
        </div>
      </section>
    </>
  );
};

export default page;
