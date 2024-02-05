import React from "react";
import { HeroImageWrapper, HeroWrapper, HeroTextWrapper } from "./HeroStyles";
import HeroImage from "../../assets/heroimage.jpg";
const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroTextWrapper>
          <div>
            <h2>Gestion Empresarial</h2>
            <h3>Management Financiero</h3>
            <p>
              <span>Mas de 25 años de experiencia</span> en el sector financiero
            </p>
            <p>
              Especializados en el sector agropecuario y en industrias
              sustentables
            </p>
          </div>
        </HeroTextWrapper>
        <HeroImageWrapper>
          <img src={HeroImage} alt="" />
        </HeroImageWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
