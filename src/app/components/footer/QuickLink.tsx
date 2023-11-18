import React from "react";
import Link from "next/link";

interface QuickLinkProps {
  text: string;
  href: string;
}
const QuickLink = ({ text, href }: QuickLinkProps) => {
  return (
    <Link className="text-sm text-[#FFF] font-medium font-inter" href={href}>
      {text}
    </Link>
  );
};

export default QuickLink;
