
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import TextSparrow from "./StyledComponent/TextSparrow";
import NavbarTool from "./StyledComponent/NavbarTool";
import SocialTools from "./StyledComponent/SocialTools";

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "Education", href: "#education", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = () => setNav(!nav);
  const [activeLink, setActiveLink] = useState("");


  useEffect(()=>{
    const handleScroll =()=>{
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <div className={`w-full fixed top-0 z-50 transition duration-300  ${ isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md":"bg-transparent" }`}>
      <nav className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between items-center">
          <TextSparrow/>
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center ">
            {/* Middle - Nav Links */}
            <NavbarTool />
          </div>

          {/* Social Icons in Mobile Menu */}
          <div className="flex gap-2 items-center">
            <SocialTools/>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
            {!nav ? (
              <FiMenu
                className={`text-white text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              />
            ) : (
              <FiX
                className={`text-white text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              />
            )}
          </div>

          {/* Mobile Menu */}
          {nav && (
            <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center">
              {navigation.map((item) => {
                const isActive = activeLink === item.name;
                return (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={classNames(
                      "py-4 text-2xl hover:text-gray-300 transition-colors duration-300",
                      isActive ? "text-blue-500 text-2xl" : "text-white"
                    )}
                    onClick={() => {
                      handleClick();
                      const targetId = item.href.startsWith("#") ? item.href : item.href.split("#")[1];
                      if (targetId) {
                        const targetElement = document.getElementById(targetId.substring(1));
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (item.href === "/") {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
