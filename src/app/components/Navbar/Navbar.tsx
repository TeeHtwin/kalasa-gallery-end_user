"use client";
import React, { useState, useEffect } from "react";
import Logo from "../common/Logo";
import NavText from "./NavText";
import { usePathname } from "next/navigation";
import Title from "../common/Title";
import { cn } from "@/app/lib/utils";

const Navbar: React.FC = () => {
  const Nav = [
    { name: "home", href: "/" },
    { name: "gallery", href: "/gallery" },
    { name: "events", href: "/events" },
    { name: "artists", href: "/artists" },
    { name: "blogs", href: "/blogs" },
  ];

  const mobileNav = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "Gallery",
      href: "gallery",
    },

    {
      name: "Artists",
      href: "/artists",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);

  const isHomepage = pathName === "/";
  const homepageClass = isHomepage ? "absolute bg-transparent" : "shadow-sm";

  const DesktopNavbar = () => (
    <div className="hidden lg:flex items-center">
      {Nav?.map((nav) => (
        <NavText pathName={pathName} key={nav.name} {...nav} />
      ))}
    </div>
  );

  const MobileNavbar = () => (
    <div
      className={`flex animate-fade animate-once animate-ease-in animate-alternate animate-fill-both  w-full py-10 flex-col z-10 lg:hidden ${
        menuOpen
          ? "text-center bg-neutral-light top-3 w-full pl-4 pr-4"
          : " hidden"
      }`}
    >
      <Title className="text-xl font-bold text-primary mb-5">Our Menu</Title>
      <div className=" flex flex-col gap-5 w-1/3 mx-auto">
        {mobileNav?.map((nav) => (
          <NavText
            className="text-sm border-b w-full border-b-primary text-primary font-medium  border-opacity-20"
            key={nav.name}
            {...nav}
          />
        ))}
      </div>
    </div>
  );

  return (
    <nav
      className={cn(
        "flex flex-row bg-neutral-light gap-2 z-10 py-6 px-4 lg:py-1 justify-between items-center w-full",
        homepageClass,
        { "px-0 py-0": menuOpen }
      )}
    >
      {/* {menuOpen && createPortal(<MobileNavbar />, document.body)} */}
      <div
        className={`flex items-center ${menuOpen ? "hidden lg:flex" : "flex"}`}
      >
        <Logo className="w-[120px] h-[44px] lg:w-[258px] lg:h-[96px]" />
      </div>
      <DesktopNavbar />

      <MobileNavbar />

      <button
        className="lg:hidden absolute right-4 top-4 md:hidden z-10 cursor-pointer"
        onClick={toggleMenu}
      >
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
              stroke={pathName === "/" ? "white" : "#883B0A"}
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
