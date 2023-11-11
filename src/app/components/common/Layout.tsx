import React from "react";
import { cn } from "@/app/lib/untils";
interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <section
      className={cn(
        "bg-neutral-light py-10 px-4 lg:py-[120px] lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Layout;
