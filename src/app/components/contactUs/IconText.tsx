import React from "react";
import Paragraph from "../common/Text/Paragraph";
import Image from "next/image";

interface IconTextProps {
  text: string;
  icon: string;
}

const IconText = ({ text, icon }: IconTextProps) => {
  return (
    <div className="flex gap-6">
      <Image src={icon} alt="icon" width={24} height={24} />
      <Paragraph className="text-xs lg:text-xl text-white">{text}</Paragraph>
    </div>
  );
};

export default IconText;
