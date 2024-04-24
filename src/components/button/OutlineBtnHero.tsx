import React from "react";
import { cn } from "@/app/lib/utils";

interface OutlineBtnHeroProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: any;
}
const OutlineBtnHero = ({
  children,
  onClick,
  className,
}: OutlineBtnHeroProps) => {
  return (
    <button
      className={cn(
        "px-[14px] text-[12px] lg:text-lg font-inter font-medium border lg:px-9 lg:py-2.5 border-[rgb(247,228,195)] py-3 text-[#F7E4C3]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineBtnHero;
