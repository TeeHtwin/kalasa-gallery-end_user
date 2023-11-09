'use client'
import React from 'react';
import Logo from '../common/Logo';
import NavText from './NavText';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const Nav = [
    { name: "home", href: "/" },
    { name: "gallery", href: "/gallery" },
    { name: "events", href: '/events' },
    { name: "artists", href: '/artists' },
    { name: "blogs", href: '/blogs' }
  ];
  const pathName = usePathname()
  let style : string;
  let textStyle : string;
  if (pathName === '/') {
    style = 'absolute'
  } 

  return (
    <nav className={`flex gap-2 z-10 py-6 px-4 lg:py-1  justify-between items-center bg-transparent w-full ${style}`}>
      <Logo />
      <div className=''>
      {Nav?.map((nav)=> (
        <NavText pathName={pathName} key={nav.name} {...nav} />
      ))}
      </div>
    </nav>
  );
};

export default Navbar;


