import React from "react";
import {
  BorderBottom,
  InspiracionCard,
  InspiracionCardsWrapper,
  InspiracionTitleWrapper,
  InspiracionVideoWrapper,
  InspiracionWrapper,
} from "./InspiracionStyles";
import InspiracionVideo from "../../assets/inspiracionvideo.mp4";

const Inspiracion = () => {
  return (
    <>
      <InspiracionWrapper>
        <InspiracionTitleWrapper>
          <h4>Y nuestra inspiracion se basa en:</h4>
          <InspiracionVideoWrapper>
            <video autoPlay loop muted>
              <source src={InspiracionVideo} />
            </video>
          </InspiracionVideoWrapper>
        </InspiracionTitleWrapper>
        <InspiracionCardsWrapper>
          <InspiracionCard>
            <h5>Compartir nuestro valores</h5>
            <p>
              Nuestros logros, la ambicion por seguir mejorando el respeto y la
              humildad por sobre todo.
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
              Brindando oportunidades de desarrollo, mentoria y apoyo,
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
