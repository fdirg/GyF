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

  return (
    <LayoutWrapper>
      {children}
      <a
        href="https://wa.me/5493415826686"
        className="wsp-float"
        target="_blank"
      >
        <IoLogoWhatsapp className="i-float" />
      </a>
    </LayoutWrapper>
  );
};

export default Layout;
