
import React, { useState } from 'react';
import { FaHome, FaGraduationCap, FaCode, FaStar, FaEnvelope } from "react-icons/fa";
import "./NavbarTool.css";
import { HiLightBulb } from "react-icons/hi";

const NavbarTool = () => {
  const [activeLink, setActiveLink] = useState("home"); // Default active link

  const navLinks = [
    { name: "Home", icon: FaHome, path: "#home" },
    { name: "Skills", icon: FaStar, path: "#skills" },
    { name: "Projects", icon: FaCode, path: "#projects" },
    { name: "Education", icon: FaGraduationCap, path: "#education" },
    { name: "Contact", icon: FaEnvelope, path: "#contact" },
  ];

  const handleNavLinkClick = (path, name) => {
    setActiveLink(name.toLowerCase());
    const targetId = path.substring(1); 

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
  <div>
      <nav>
        <ul className="flex gap-2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name.toLowerCase();
            return (
              <li key={link.name}>
                <button
                  onClick={() => handleNavLinkClick(link.path, link.name)}
                  className={`light-button ${isActive ? 'active-link' : ''}`}
                >
                  <div className="bt">
                    <div className="button-holder">
                      <div className='svg flex flex-col items-center justify-center'>
                        <link.icon className={`svg-icon ${isActive ? 'text-white' : 'text-gray-500'}`}/>
                        <p className={`text-md ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          {link.name}
                        </p>
                      </div>
                    </div>
                    <div className="light-holder">
                      <HiLightBulb className={`bulb-icon ${isActive ? 'text-white' : 'text-gray-500'}`}/>
                      <div className="light" />
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarTool;