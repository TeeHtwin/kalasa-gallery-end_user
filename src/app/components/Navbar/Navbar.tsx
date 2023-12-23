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
    { name: "events", href: "/exhibition" },
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
      href: "/exhibition",
    },
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "Gallery",
      href: "/gallery",
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

  const startingRoute = (pathname: string) => `/${pathname.split("/")[1]}`;
  const currentStartingRoute = startingRoute(pathName);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);

  const isHomepage = pathName === "/";

  return (
    <nav
      className={cn(
        "flex flex-row bg-neutral-light sticky gap-2 py-6 px-4 lg:py-1 lg:px-20 justify-between items-center w-full z-10 top-0",
        {
          "fixed bg-transparent": isHomepage && !menuOpen,
          "bg-neutral-light": !isHomepage || menuOpen,
        }
      )}
    >
      <div className={cn("items-center flex", { hidden: menuOpen })}>
        <Logo />
      </div>
      <div
        className={cn("w-full lg:w-fit lg:mx-0", {
          "mx-auto": menuOpen,
          "text-right": !menuOpen,
        })}
      >
        {/* Desktop */}
        <div className="hidden lg:flex items-center">
          {Nav?.map((nav) => (
            <NavText pathName={currentStartingRoute} key={nav.name} {...nav} />
          ))}
        </div>

        {/* menu */}
        <div className="text-right">
          <button
            className={cn("lg:hidden text-right z-10 cursor-pointer")}
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
        </div>
        {/* mobile */}
        <div
          className={cn(
            "flex animate-fade animate-once animate-ease-in animate-alternate animate-fill-both mx-auto w-3/5 flex-col z-10 lg:hidden text-center bg-neutral-light",
            { hidden: !menuOpen }
          )}
        >
          <Title className="text-xl font-bold text-primary mb-5">
            Our Menu
          </Title>
          <div className="flex flex-col gap-5 w-full mx-auto">
            {mobileNav?.map((nav) => (
              <NavText
                className="text-sm border-b w-full border-b-primary text-primary font-medium border-opacity-20"
                key={nav.name}
                {...nav}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
