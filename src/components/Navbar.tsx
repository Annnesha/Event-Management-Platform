import React, { useState, useEffect, use } from "react";
import Switcher from "./Switcher";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";

const mobileNav = () => {
  return (
    <div className="">
      Mobile nav
    </div>
  )
}

const laptopNav = () => { 
  return(
    <div className="xl:w-fit md:max-w-fit hidden md:flex bg-dark/20 backdrop-blur-md h-fit xl:gap-48 md:gap-16 my-10 rounded-full md:px-6 lg:px-10 py-4 items-center dark:bg-dark/50 ">
      <div className="flex gap-4 items-center">
        <Image src="./logo-white.svg" alt="" className="filter invert dark:filter-none w-10 h-10" width={15} height={15} />
        <h1 className="uppercase md:text-3xl lg:text-5xl tracking-[14px] cursor-pointer">Ibento</h1>
      </div>
      <div>
        <ul className="flex items-center md:gap-10 lg:gap-10 xl:gap-16 lg:text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Get Started</li>
          <Switcher />
        </ul>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    setIsMobile(window.innerWidth < 800)
  },[])
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? mobileNav() : laptopNav()
};

export default Navbar;
