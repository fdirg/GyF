import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  height: 70px;
  width: 100%;
  background: #f8f4f2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  width: 1100px;
  margin: 0 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: #455e5e;
  font-size: 2.6rem;
  font-style: italic;
  font-weight: 600;
`;

export const MediasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .wsp,
  .ig {
    color: #455e5e;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: 0.3s;
    padding: 2px;
  }
  .wsp:hover,
  .ig:hover {
    transform: scale(1.2);
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsLinks = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
