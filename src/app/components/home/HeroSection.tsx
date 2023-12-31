import React from "react";
import Title from "@/app/components/common/Title";
import OutlineBtnHero from "@/app/components/button/OutlineBtnHero";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <main className="h-screen bg-right w-full bg-[url('../../public/img/smallBackground.jpg')] lg:bg-[url('../../public/img/Background.jpg')] bg-cover bg-fixed relative p-0 m-0 flex items-center justify-center flex-col gap-10">
      <div className=" flex-col justify-start items-center gap-4 lg:gap-10 inline-flex lg:w-[900px]">
        <Title className="text-white text-[32px] lg:text-[88px] font-bold">
          Kalasa Art Space
        </Title>
        <Title className="text-center text-amber-100 text-lg lg:text-4xl font-bold">
          A Space where there is Heart, there is Art
        </Title>
        <p className="text-center w-full text-white text-sm  lg:text-lg font-medium font-inter leading-[26px] lg:leading-10 px-[14px]">
          We need to work then give time for Heart. If you would love to feed
          your soul and heart, don’t forget to visit Kalasa Art. You can enjoy
          various art works for your soul and fresh healthy juice for your body
          here. Don’t miss it out, my dear all. We open daily 9:30 Am to 9:00 Pm
          daily.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <OutlineBtnHero>Upcoming Events</OutlineBtnHero>
        <OutlineBtnHero>Learn More &rarr;</OutlineBtnHero>
      </div>
    </main>
  );
};

export default HeroSection;
