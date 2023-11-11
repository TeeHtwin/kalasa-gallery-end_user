import { cn } from "@/app/lib/untils";
import React from "react";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}
const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-primary text-xs font-medium lg:text-base font-inter",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
