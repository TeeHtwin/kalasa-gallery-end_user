import logo from "@/../public/logo.svg"
import React from 'react'
import Image from "next/image"

const Logo = ({className}) => {
  return (
   <Image className={className} 
   src={logo} alt="logo" />
  )
}

export default Logo
