"use client";
import Link from "next/link";
import React, { Children } from "react";
import { useState, useEffect } from "react";

interface ArtistsClientLayoutProps {
  children: React.ReactNode;
  href: string;
}
const ArtistsClientLayout = ({ children, href }: ArtistsClientLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial size
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const style =
    "px-1 border-primary border border-opacity-20 pb-4 pt-1 lg:px-2 lg:pt-2 lg:pb-10 ";
  return (
    <>
      {isMobile ? (
        <Link href={href} className={style}>
          {children}
        </Link>
      ) : (
        <div className={style}>{children}</div>
      )}
    </>
  );
};

export default ArtistsClientLayout;
