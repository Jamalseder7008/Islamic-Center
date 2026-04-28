import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Nav = styled.nav<{ $menuOpen?: boolean }>`
  background: linear-gradient(135deg, #1e3a8a 0%, #162d6e 100%);
  border-radius: 16px;
  height: 72px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px;
  z-index: 12;
  box-shadow: 0 4px 20px rgba(30, 58, 138, 0.3);

  @media screen and (max-width: 768px) {
    ${({ $menuOpen }) =>
      $menuOpen &&
      `
      border-radius: 16px 16px 0 0;
      background: #1e3a8a;
      box-shadow: none;
    `}
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
`;

export const NavLogoIcon = styled.span`
  color: gold;
  font-size: 1.55rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const NavLogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.25;

  .name {
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.4px;
    white-space: nowrap;
  }

  .location {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media screen and (max-width: 480px) {
    .location {
      display: none;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px;
  }
`;

export const NavMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background: #1e3a8a;
    padding: 6px 12px 16px;
    border-radius: 0 0 16px 16px;
    z-index: 100;
    gap: 2px;
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.4);
    animation: ${slideDown} 0.2s ease forwards;
  }
`;

export const NavDivider = styled.div`
  width: 1px;
  height: 22px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 8px;

  @media screen and (max-width: 768px) {
    display: block;
    width: auto;
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
    margin: 6px 0;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 8px;
  background: transparent;
  padding: 8px 16px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.92rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    color: gold;
    background: rgba(255, 255, 255, 0.08);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
    padding: 14px 16px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    &.active {
      background: rgba(255, 255, 255, 0.1);
      color: gold;
      border-bottom-color: transparent;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
  }
`;

export const NavDonateLink = styled(Link)`
  border-radius: 8px;
  background: gold;
  padding: 8px 20px;
  color: #1e3a8a;
  font-size: 0.92rem;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.3px;

  &.active {
    background: #e5b800;
  }
  &:hover {
    background: #fff;
    color: #1e3a8a;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 14px 16px;
    font-size: 1rem;
    border-radius: 10px;
    margin-top: 4px;
  }
`;
