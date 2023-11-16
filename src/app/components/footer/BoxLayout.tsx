import { cn } from "@/app/lib/untils";
import React from "react";
cn;

interface boxLayoutProps {
  children: React.ReactNode;
  className?: string;
}
const BoxLayout = ({ children, className }: boxLayoutProps) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};

export default BoxLayout;
