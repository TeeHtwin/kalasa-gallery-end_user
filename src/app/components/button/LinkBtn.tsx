"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

interface LinkBtnProps {
  onClick?: () => void;
  className?: string;
  icon?: any;
  href: string;
  mobileText: string;
  dtText?: string; //
}

const LinkBtn = ({
  onClick,
  className,
  href,
  mobileText,
  dtText,
}: LinkBtnProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      href={href}
      className={cn(
        "text-[12px] lg:text-lg font-inter font-medium lg:border lg:px-7 lg:py-2 lg:border-primary py-3 text-primary underline lg:no-underline hover:bg-primary hover:text-white duration-300 ease-in",
        className
      )}
      onClick={onClick}
    >
      {isMobile ? mobileText : dtText ? dtText : mobileText}
    </Link>
  );
};

export default LinkBtn;
