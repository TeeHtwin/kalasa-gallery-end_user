import logo from "@/../public/logo.svg";
import React from "react";
import Image from "next/image";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return <Image className={className} src={logo} alt="logo" />;
};

export default Logo;
