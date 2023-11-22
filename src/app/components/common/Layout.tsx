import React from "react";
import { cn } from "@/app/lib/utils";
interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <section
      className={cn("bg-neutral-light px-4 py-2 lg:py-12 lg:px-20", className)}
    >
      {children}
    </section>
  );
};

export default Layout;
