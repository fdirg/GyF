import React from "react";
import {
  ItemsLinks,
  LinksWrapper,
  LogoLink,
  LogoWrapper,
  MediasWrapper,
  Nav,
  NavLinks,
  NavbarWrapper,
} from "./NavbarStyles";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

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
          <MediasWrapper>
            <a href="#" className="ig">
              <FaInstagram />
            </a>
          </MediasWrapper>

          <LinksWrapper>
            <ItemsLinks>
              <NavLinks to="/">Inicio</NavLinks>
              <NavLinks to="/servicios">Nuestros Servicios</NavLinks>
              <NavLinks to="/clientes">Clientes</NavLinks>
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
