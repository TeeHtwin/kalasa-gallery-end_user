import React from 'react';
import Link from 'next/link';

interface NavTextProps {
  href: string;
  name: string;
  pathName: string;
}

const NavText: React.FC<NavTextProps> = ({ href, name , pathName,}) => {
  let activeStyle : string;
  if (pathName === href) {
    if (pathName === '/') {
      activeStyle = 'border-b-4 border-b-[#F7E4C3] text-amber-100'
    }
    else {
      activeStyle = 'text-primary border-b-4 border-b-[#FF9540]'
    
    }
  }
  return (
    <Link className={`uppercase ${pathName === '/' ? 'text-white' : 'text-[#151515]'} mx-auto py-3 px-6 font-semibold font-inter text-lg leading-none ${activeStyle}`} href={href}>
      {name}
    </Link>
  );
};

export default NavText;

