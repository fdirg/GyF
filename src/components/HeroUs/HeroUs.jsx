import React from "react";
import {
  HeroUsTextDescription,
  HeroUsImageWrapper,
  HeroUsTextLogo,
  HeroUsTextWrapper,
  HeroUsWrapper,
} from "./HeroUsStyles";
import FotoRosario from "../../assets/rosario.jpg";

const HeroUs = () => {
  return (
    <>
      <HeroUsWrapper>
        <HeroUsTextWrapper>
          <HeroUsTextLogo>
            <h2>G&F</h2>
            <h4>Gestion Empresarial</h4>
            <p>Desde Rosario, Santa Fe, Argentina.</p>
          </HeroUsTextLogo>
          <HeroUsTextDescription>
            <p>
              Somos una empresa que conecta proyectos con el ecosistema
              financiero para generar impacto positivo y sustentable.
            </p>
            <p>
              Promovemos la integración de los diferentes canales de
              financiacion, orientados a proyectos en empresas con compromiso
              social y ambiental.
            </p>
          </HeroUsTextDescription>
        </HeroUsTextWrapper>
        <HeroUsImageWrapper>
          <img src={FotoRosario} alt="Foto Rosario" />
        </HeroUsImageWrapper>
      </HeroUsWrapper>
    </>
  );
};

export default HeroUs;
