import React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

interface OutlineBtnHeroProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: any;
  href: string;
}
const OutlineBtnHero = ({
  children,
  onClick,
  href,
  className,
}: OutlineBtnHeroProps) => {
  return (
    <Link
    href={href}
      className={cn(
        "px-[14px] text-[12px] lg:text-lg font-inter font-medium border lg:px-9 lg:py-2.5 border-[rgb(247,228,195)] py-3 text-[#F7E4C3] hover:bg-primary/60 hover:text-white hover:border-white transition-all",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default OutlineBtnHero;
