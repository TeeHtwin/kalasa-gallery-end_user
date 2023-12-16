import { cn } from "@/app/lib/utils";
import React from "react";

interface TitleInterProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}
const TitleInter = ({ className, children }: TitleInterProps) => {
  return (
    <h1
      className={cn(
        "text-primary font-inter text-base font-semibold lg:text-xl lg:leading-[33px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default TitleInter;
