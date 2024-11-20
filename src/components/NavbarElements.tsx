import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #0c2b1e;
  border-radius: 25px;
  height: 85px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  z-index: 12;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 50px; /* Adjust the size as needed */
    object-fit: contain;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div<{ $isOpen: boolean }>`  /* Transient prop */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background-color: #0c2b1e;
    padding: 10px;
    border-radius: 0 0 25px 25px;
  }
`;



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #0c2b1e;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &.active {
    color:  gold;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0c2b1e;
  }
`;
