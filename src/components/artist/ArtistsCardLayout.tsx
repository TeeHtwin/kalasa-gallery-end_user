import Link from "next/link";
import React, { Children } from "react";

interface ArtistsCardLayoutProps {
  children: React.ReactNode;
  artistId: number;
}
const ArtistsCardLayout = ({ children, artistId }: ArtistsCardLayoutProps) => {
  return (
    <>
      <Link
        href={`/artists/${artistId}`}
      >
        {children}
      </Link>
    </>
  );
};

export default ArtistsCardLayout;
