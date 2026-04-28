import React, { useState } from "react";
import { FaMosque } from "react-icons/fa6";
import {
  Nav,
  NavMenu,
  Bars,
  NavBtnLink,
  NavLogo,
  NavLogoIcon,
  NavLogoText,
  NavDonateLink,
  NavDivider,
} from "./NavbarElements";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $menuOpen={isOpen}>
      <NavLogo to="/" onClick={closeMenu}>
        <NavLogoIcon>
          <FaMosque />
        </NavLogoIcon>
        <NavLogoText>
          <span className="name">Islamic Center</span>
          <span className="location">New Orleans</span>
        </NavLogoText>
      </NavLogo>

      <Bars onClick={toggleMenu} aria-label="Toggle menu" />

      <NavMenu $isOpen={isOpen}>
        <NavBtnLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavBtnLink>

        <NavBtnLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Services
        </NavBtnLink>

        <NavBtnLink
          to="/QuranLessons"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Qur'an Lessons
        </NavBtnLink>

        <NavDivider />

        <NavDonateLink
          to="/donate"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Donate
        </NavDonateLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
