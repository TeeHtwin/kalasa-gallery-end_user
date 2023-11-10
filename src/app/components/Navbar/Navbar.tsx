"use client";
import React, { useState } from "react";
import Logo from "../common/Logo";
import NavText from "./NavText";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const Nav = [
    { name: "home", href: "/" },
    { name: "gallery", href: "/gallery" },
    { name: "events", href: "/events" },
    { name: "artists", href: "/artists" },
    { name: "blogs", href: "/blogs" },
  ];

  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomepage = pathName === "/";
  const homepageClass = isHomepage ? "absolute" : "";

  return (
    <nav
      className={`flex  flex-row gap-2 z-10 py-6 px-4 lg:py-1 justify-between items-center bg-transparent w-full ${homepageClass}`}
    >
      <div className="flex items-center">
        <Logo className="w-[120px] h-[44px] lg:w-[258px] lg:h-[96px]" />
      </div>
      <div
        className={`flex flex-col lg:items-center lg:flex-row ${
          menuOpen
            ? "text-center bg-black box-border top-3 w-full "
            : "hidden lg:block"
        }`}
      >
        {Nav?.map((nav) => (
          <NavText pathName={pathName} key={nav.name} {...nav} />
        ))}
      </div>
      <button className="lg:hidden z-10 cursor-pointer" onClick={toggleMenu}>
        {/* Hamburger icon */}
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M8.44751 21.5538L15.0013 15L21.555 21.5538M21.555 8.44629L15 15L8.44751 8.44629"
              stroke="#883B0A"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M6.42864 9.28564H23.5715M6.42578 14.9999H23.5644M6.42864 20.7142H23.5644"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
