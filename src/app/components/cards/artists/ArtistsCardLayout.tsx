import Link from "next/link";
import React, { Children } from "react";

interface ArtistsCardLayoutProps {
  children: React.ReactNode;
  href: string;
}
const ArtistsCardLayout = ({ children, href }: ArtistsCardLayoutProps) => {
  return (
    <>
      <Link
        href={href}
        className={
          "px-1 border-primary border mx-auto border-opacity-20 pb-4 pt-1 lg:px-2 lg:pt-2 lg:pb-10 block lg:hidden"
        }
      >
        {children}
      </Link>

      <div
        className={
          "px-1 border-primary mx-auto border border-opacity-20 pb-4 pt-1 lg:px-2 lg:pt-2 lg:pb-10 hidden lg:block"
        }
      >
        {children}
      </div>
    </>
  );
};

export default ArtistsCardLayout;
