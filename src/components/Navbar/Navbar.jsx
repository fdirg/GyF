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
              <NavLinks to="/Service">Nuestro Servicio</NavLinks>
              <NavLinks>Clientes</NavLinks>
              <NavLinks>Quienes somos</NavLinks>
              <NavLinks>Contacto</NavLinks>
            </ItemsLinks>
          </LinksWrapper>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
