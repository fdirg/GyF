import React from "react";
import { LayoutWrapper } from "./LayoutStyles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
