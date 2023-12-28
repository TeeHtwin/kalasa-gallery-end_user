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
  // let activeStyle;
  // if (pathName === href) {
  //   if (pathName === "/") {
  //     activeStyle = "border-b-4 border-b-[#F7E4C3] text-amber-100";
  //   } else {
  //     activeStyle = "text-primary border-b-4 border-b-[#FF9540]";
  //   }
  // }
  return (
    <Link
      className={cn(
        "uppercase mx-auto py-3 px-6 font-semibold font-inter text-lg leading-none text-[#151515]",
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
