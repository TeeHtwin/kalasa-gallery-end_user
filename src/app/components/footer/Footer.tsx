import React from "react";
import Layout from "../common/Layout";
import Logo from "../common/Logo";
import Paragraph from "../common/Text/Paragraph";
import Image from "next/image";
import igOutlineIcon from "@/../public/FooterIcon/Ig.svg";
import fbOutlineIcon from "@/../public/FooterIcon/fb.svg";
import locationOutlineIcon from "@/../public/FooterIcon/Location.svg";
import Link from "next/link";
import QuickLink from "./QuickLink";
import QuickLinkTitile from "./QuickLinkTitile";
import BoxLayout from "./BoxLayout";

interface QuickLink {
  text: string;
  href: string;
}

const Footer = () => {
  const sociallink = [
    {
      icon: fbOutlineIcon,
      href: "https://www.facebook.com/KALASAARTSPACE?mibextid=ZbWKwL",
    },
    {
      icon: igOutlineIcon,
      href: "https://www.instagram.com/kalasa_art_space?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      icon: locationOutlineIcon,
      href: "/",
    },
  ];

  const quickLinks: QuickLink[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Gallery",
      href: "/gallery",
    },
    {
      text: "Exhibitions",
      href: "/exhibitions",
    },
    {
      text: "Collections",
      href: "/collections",
    },
  ];

  return (
    <Layout className="bg-[#161616] lg:p-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
        <BoxLayout className="justify-between gap-5">
          <Logo className="w-[120px] h-auto lg:w-[214px]" />
          <Paragraph className="text-lime-50 text-sm lg:text-sm font-medium">
            A Space of sharing ART for all generations
          </Paragraph>
          <div className="flex items-center gap-6">
            {sociallink.map((link) => (
              <Link href={link.href} target="_blank" key={link.icon}>
                <Image
                  src={link.icon}
                  className="w-[30px] lg:w-[40px] h-auto"
                  alt="social icon"
                />
              </Link>
            ))}
          </div>
        </BoxLayout>
        <BoxLayout>
          <QuickLinkTitile>quick links</QuickLinkTitile>
          <div className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <QuickLink text={link.text} href={link.href} key={link.text} />
            ))}
          </div>
        </BoxLayout>
        <BoxLayout>
          <QuickLinkTitile>get in touch</QuickLinkTitile>
          <p className="opacity-70 text-white font-inter text-sm font-medium">
            Contact us:{" "}
          </p>
          <p className="text-lime-50 text-sm mt-2 font-inter font-medium">
            +95 976 345 578
          </p>
          <p className="text-lime-50 text-sm mt-2 font-inter font-medium">
            admin.kalasa@gmail.com
          </p>
        </BoxLayout>
        <BoxLayout>
          <QuickLinkTitile>Location</QuickLinkTitile>
          <p className="opacity-70 text-white font-inter text-sm font-medium">
            Our address:{" "}
          </p>
          <p className="text-lime-50 text-sm mt-2 font-inter font-medium"></p>
          <p className="text-lime-50 text-sm mt-2 font-medium font-inter">
            No. 91-93, 1st floor(left), Seikkantha Street (Middle Block),
            Kyauktada Township, Yangon.
          </p>
        </BoxLayout>
      </div>
      <div className="inline-flex items-center w-full justify-between pt-10 lg:pt-20 flex-col lg:flex-row">
        <div className="border-solid w-full mb-5 lg:mb-0 border-[1px] border-Eggshell basis-1/3 "></div>
        <p className="opacity-80 text-lime-50 text-xs lg:text-sm font-medium font-inter text-center">
          © 2019-2023. All Right Reserved by Kalasa Art Space.
        </p>
        <div className="border-solid border-[1px] border-Eggshell basis-1/3 hidden fontinter lg:block"></div>
      </div>
    </Layout>
  );
};

export default Footer;
