import React from "react";
import Image from "next/image";

interface IconTextProps {
  href: string;
  icon: string;
  text: string;
}

const IconText = ({ href, text, icon }: IconTextProps) => {
  return (
    <div className="flex gap-6">
      <Image src={icon} alt="icon" width={24} height={24} />
      <a
        href={href}
        className="text-xs lg:text-xl text-white font-medium font-inter"
      >
        {text}
      </a>
    </div>
  );
};

export default IconText;
