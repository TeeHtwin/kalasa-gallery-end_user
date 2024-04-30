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
        width={300}
        height={300}
        priority
        className={className ?? "w-[150px] h-auto lg:h-[80px]"}
      />
    </Link>
  );
};

export default Logo;
