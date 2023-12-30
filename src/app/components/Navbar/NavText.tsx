import React from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface NavTextProps {
  href: string;
  name: string;
  pathName?: string;
  className?: string;
  scrolled?: boolean;
}

const NavText: React.FC<NavTextProps> = ({
  href,
  name,
  pathName,
  className,
  scrolled,
}) => {
  return (
    <Link
      className={cn(
        "uppercase mx-auto py-3 px-6 font-semibold font-inter leading-none",
        {
          "text-primary border-b-4 border-b-[#FF9540]":
            pathName === "/" && pathName === href && scrolled,
          "text-primary border-b-4 border-b-[#FF9540]": pathName === href,

          "text-white ": pathName === "/",

          "text-[#151515]": pathName === "/" && scrolled,
        },
        className
      )}
      href={href}
    >
      {name}
    </Link>
  );
};

export default NavText;
