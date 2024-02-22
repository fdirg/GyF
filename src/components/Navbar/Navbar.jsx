import { React, useRef } from "react";

import {
  CloseButton,
  ItemsLinks,
  LinksWrapper,
  LogoLink,
  LogoWrapper,
  Nav,
  NavButton,
  NavLinks,
  NavbarWrapper,
} from "./NavbarStyles";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const handleShowNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <NavbarWrapper>
        <LogoWrapper>
          <motion.div whileTap={{ scale: 0.92 }}>
            <LogoLink to="/">G&F</LogoLink>
          </motion.div>
        </LogoWrapper>
        <Nav ref={navRef}>
          <LinksWrapper>
            <ItemsLinks>
              <NavLinks to="/">Inicio</NavLinks>
              <NavLinks to="/servicios">Nuestro Servicio / Clientes</NavLinks>
              <NavLinks to="/nosotros">Quiénes somos / Contacto</NavLinks>
              <CloseButton onClick={handleShowNavbar}>
                <FaTimes />
              </CloseButton>
            </ItemsLinks>
          </LinksWrapper>
        </Nav>
        <NavButton onClick={handleShowNavbar}>
          <CiMenuBurger />
        </NavButton>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
