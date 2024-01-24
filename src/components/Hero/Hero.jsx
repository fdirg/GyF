import React from "react";
import {
  HeroImageWrapper,
  HeroWrapper,
  HeroTextWrapper,
  HeroText,
} from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroImageWrapper>
          <img
            src="https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <HeroTextWrapper>
            <HeroText>Gestion Empresarial</HeroText>
          </HeroTextWrapper>
        </HeroImageWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
