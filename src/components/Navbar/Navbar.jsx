import React from "react";
import {
  ItemsLinks,
  LinksWrapper,
  LogoLink,
  LogoWrapper,
  Nav,
  NavLinks,
  NavbarWrapper,
} from "./NavbarStyles";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Nav>
          <LogoWrapper>
            <motion.div whileTap={{ scale: 0.92 }}>
              <LogoLink to="/">G&F</LogoLink>
            </motion.div>
          </LogoWrapper>
          <LinksWrapper>
            <ItemsLinks>
              <NavLinks to="/">Inicio</NavLinks>
              <NavLinks to="/servicios">Nuestro Servicio</NavLinks>
              <NavLinks to="/servicios#clientes">Clientes</NavLinks>
              <NavLinks to="/nosotros">Quienes somos</NavLinks>
              <NavLinks to="/">Contacto</NavLinks>
            </ItemsLinks>
          </LinksWrapper>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
