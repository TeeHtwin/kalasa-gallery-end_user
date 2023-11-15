import React from "react";
import Image from "next/image";
import fbLinkIcon from "@/../public/ContactUsIcon/Facebook icon.svg";
import instaLinkIcon from "@/../public/ContactUsIcon/Instagram icon.svg";
import messengerLinkIcon from "@/../public/ContactUsIcon/Messenger icon.svg";
import Link from "next/link";

const SocialLink = () => {
  const sociallink = [
    {
      icon: fbLinkIcon,
      href: "/",
    },
    {
      icon: messengerLinkIcon,
      href: "/",
    },
    {
      icon: instaLinkIcon,
      href: "/",
    },
  ];
  return (
    <div className="flex items-center gap-8">
      {sociallink.map((link) => (
        <Link href={link.href} key={link.icon}>
          <Image
            src={link.icon}
            className="w-5 h-5 lg:w-8 lg:h-8"
            alt="social icon"
            width={32}
            height={32}
          />
        </Link>
      ))}
    </div>
  );
};
export default SocialLink;
