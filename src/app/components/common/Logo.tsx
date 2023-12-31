import logo from "@/../public/logo.svg";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo"
        width={600}
        height={600}
        priority
        className={className ?? "w-full h-[44px] lg:h-[80px]"}
      />
    </Link>
  );
};

export default Logo;
