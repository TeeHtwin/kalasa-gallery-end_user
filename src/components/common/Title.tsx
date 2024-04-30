import React, { ReactNode } from "react";
import { cn } from "@/app/lib/utils";
interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={cn("text-xl lg:text-4xl font-cardo font-bold ", className)}>
      {children}
    </h1>
  );
};

export default Title;
