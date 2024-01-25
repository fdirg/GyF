import React from "react";
import { HeroImageWrapper, HeroWrapper, HeroTextWrapper } from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroTextWrapper>
          <div>
            <h2>Gestion Empresarial</h2>
            <h3>Management Financiero</h3>
            <p>
              Mas de <span>25 años de experiencia</span> en el sector financiero
            </p>
            <p>
              Especializados en el sector agropecuario y en industrias
              sustentables
            </p>
          </div>
        </HeroTextWrapper>
        <HeroImageWrapper>
          <img
            src="https://images.unsplash.com/photo-1507662228758-08d030c4820b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </HeroImageWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
