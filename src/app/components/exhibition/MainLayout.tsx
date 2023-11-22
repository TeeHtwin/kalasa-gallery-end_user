import React from "react";
import { cn } from "@/app/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return <div className={cn("mt-0  lg:mt-16", className)}>{children}</div>;
};

export default MainLayout;
