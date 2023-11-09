import logo from "@/../public/logo.svg"
import React from 'react'
import Image from "next/image"

const Logo = () => {
  return (
   <Image src={logo} alt="logo" width={258} height={96}/>
  )
}

export default Logo
