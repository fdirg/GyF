import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f8f4f2;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  .responsive_nav {
    transform: none;
  }
  @media (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    margin-left: 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 50%;
    background-color: #f8f4f2;
    transition: 1s;
    transform: translateY(-100vh);
    border-bottom-left-radius: 2rem;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: #344e41;
  font-size: 2.6rem;
  font-style: italic;
  font-weight: 600;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsLinks = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 960px) {
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #344646;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  padding: 10px 0;
  &::before {
    border-radius: 10px;
    transition: 0.3s;
    height: 3px;
    content: "";
    position: absolute;
    background-color: #344646;
    width: 100%;
    bottom: -20px;
    opacity: 0;
  }
  &:hover::before {
    bottom: 1px;
    opacity: 1;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  color: #344646;
  padding: 5px;
  border-radius: 20px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  @media (max-width: 960px) {
    visibility: visible;
    opacity: 1;
    margin-right: 2rem;
  }
`;

export const CloseButton = styled(NavButton)`
  font-size: 1rem;
`;
