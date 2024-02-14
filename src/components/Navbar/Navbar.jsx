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
import { IoLogoWhatsapp } from "react-icons/io";

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
              <NavLinks to="/servicios">Nuestro Servicio / Clientes</NavLinks>
              <NavLinks to="/nosotros">Quienes somos / Contacto</NavLinks>
            </ItemsLinks>
          </LinksWrapper>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
