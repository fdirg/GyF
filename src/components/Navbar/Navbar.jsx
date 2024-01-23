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

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Nav>
          <LogoWrapper>
            <LogoLink to="/">G&F</LogoLink>
          </LogoWrapper>
          <LinksWrapper>
            <ItemsLinks>
              <NavLinks>Inicio</NavLinks>
              <NavLinks>Quienes somos</NavLinks>
              <NavLinks>Nuestro Servicio</NavLinks>
              <NavLinks>Contacto</NavLinks>
            </ItemsLinks>
          </LinksWrapper>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
