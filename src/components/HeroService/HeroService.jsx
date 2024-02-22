import React from "react";
import {
  HeroServiceImageWrapper,
  HeroServiceTextWrapper,
  HeroServiceWrapper,
} from "./HeroServiceStyles";
import HeroImageService from "../../assets/heroservice.jpg";

const HeroService = () => {
  return (
    <>
      <HeroServiceWrapper>
        <HeroServiceImageWrapper>
          <img src={HeroImageService} alt="Imagen Hero" />
        </HeroServiceImageWrapper>
        <HeroServiceTextWrapper>
          <h2>Nuestro Servicio</h2>
          <div className="line"></div>
          <p>
            Exploramos opciones de financiamiento innovadoras para respaldar
            proyectos a mediano y largo plazo. Acompañamos este proceso mediante
            alternativas financieras que diversifican riesgos, asegurando una
            gestión más sólida y equilibrada.{" "}
          </p>
          <p>
            Ofrecemos asistencia especializada en inversiones de activos
            registrables, asegurando un enfoque integral y estratégico para
            maximizar los beneficios.
          </p>
          <p>
            Facilitamos el acceso al financiamiento que tu empresa necesita para
            crecer y prosperar, ya sea para financiar capital de trabajo
            (campaña agrícola) y/o proyectos de inversión.
          </p>
          <p>
            Al elegirnos, no solo obtienes el respaldo de más de 25 años de
            gestión financiera, sino también una gestión de punta a punta.
          </p>
        </HeroServiceTextWrapper>
      </HeroServiceWrapper>
    </>
  );
};

export default HeroService;
