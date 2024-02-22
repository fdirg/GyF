import React from "react";
import {
  BorderBottom,
  InspiracionCard,
  InspiracionCardsWrapper,
  InspiracionTitleWrapper,
  InspiracionImgWrapper,
  InspiracionWrapper,
} from "./InspiracionStyles";
import InspiracionImg from "../../assets/inspiracionimg.jpg";

const Inspiracion = () => {
  return (
    <>
      <InspiracionWrapper>
        <InspiracionTitleWrapper>
          <h4>Nuestra inspiración se basa en:</h4>
          <InspiracionImgWrapper>
            <img src={InspiracionImg} alt="Foto Inspiracion" />
          </InspiracionImgWrapper>
        </InspiracionTitleWrapper>
        <InspiracionCardsWrapper>
          <InspiracionCard>
            <h5>Compartir nuestros valores</h5>
            <p>
              Nuestros logros, la ambición por seguir mejorando, el respeto y la
              humildad por encima de todo.
            </p>
            <BorderBottom>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
            </BorderBottom>
          </InspiracionCard>
          <InspiracionCard>
            <h5>Promover el crecimiento profesional y personal</h5>
            <p>
              Brindando oportunidades de desarrollo, mentoría y apoyo,
              fortaleciendo equipo de trabajos y comunidades.
            </p>
            <BorderBottom>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
            </BorderBottom>
          </InspiracionCard>
          <InspiracionCard>
            <h5>La superación de desafíos</h5>
            <p>
              Impulsandonos a alcanzar nuevas alturas, fortaleciendo nuestra
              determinación y confianza.
            </p>
            <BorderBottom>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
            </BorderBottom>
          </InspiracionCard>
        </InspiracionCardsWrapper>
      </InspiracionWrapper>
    </>
  );
};

export default Inspiracion;
