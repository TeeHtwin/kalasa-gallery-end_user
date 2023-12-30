import React from "react";
import Image from "next/image";

interface IconTextProps {
  href: string;
  icon: string;
  text: string;
  text2?: string
}

const IconText = ({ href, text, icon, text2 }: IconTextProps) => {
  return (
    <div className="flex gap-6">
      <Image src={icon} alt="icon" width={24} height={24} />
      <a
        href={href}
        className="text-xs lg:text-xl text-white font-medium font-inter"
      >
        <p>{text}</p>
        <p>{text2}</p>
      </a>
    </div>
  );
};

export default IconText;
