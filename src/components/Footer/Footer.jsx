import React from "react";
import { FooterWrapper } from "./FooterStyles";
import { LogoWrapper, LogoLink } from "../Navbar/NavbarStyles";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <LogoWrapper>
          <motion.div whileTap={{ scale: 0.92 }}>
            <LogoLink to="/" style={{ fontSize: "2rem", color: "#fff" }}>
              G&F
            </LogoLink>
          </motion.div>
        </LogoWrapper>
        <div>
          <p>© Copyright 2024</p>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
