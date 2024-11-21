import React, { useState } from "react";
import { Nav, NavMenu, Bars, NavBtnLink, NavLogo } from "./NavbarElements";
import logo from "../assets/ICLogoOG.png"; // Adjust the path to your logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavLogo to="/">
        <img src={logo} alt="Logo" />
      </NavLogo>
      <Bars onClick={toggleMenu} />
      <NavMenu $isOpen={isOpen}>

        <NavBtnLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Home
        </NavBtnLink>

        <NavBtnLink 
          to="/services" 
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Services
        </NavBtnLink>

        <NavBtnLink 
          to="/QuranLessons" 
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Quran Lessons
        </NavBtnLink>
        



      </NavMenu>
    </Nav>
  );
};

export default Navbar;
