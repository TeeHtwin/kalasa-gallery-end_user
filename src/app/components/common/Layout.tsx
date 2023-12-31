import React from "react";
import { cn } from "@/app/lib/utils";
interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <section
      className={cn(
        "bg-neutral-light px-4 overflow-x-hidden py-2 lg:py-12 lg:px-20 wrapper",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Layout;
