import React from "react";
import {
  CardImg,
  CardText,
  MisionCards,
  MisionCardsWrapper,
  MisionSection,
  MisionTextWrapper,
} from "./MisionStyles";
import { TfiStatsUp } from "react-icons/tfi";
import { FaRegHandshake } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";

const Mision = () => {
  return (
    <>
      <MisionSection id="mision">
        <MisionTextWrapper>
          <h2>Como equipo de trabajo, nuestra mision es:</h2>
        </MisionTextWrapper>
        <div className="line"></div>
        <MisionCardsWrapper>
          <MisionCards>
            <CardImg>
              <h4>Desarrollo de herramientas</h4>
              <i>
                <FaArrowUpWideShort />
              </i>
            </CardImg>
            <CardText>
              <p>
                Optimizar el uso de Herramientas Financieras para el Sector
                Agroindustrial y lograr negocios mas rentables y eficientes.
              </p>
            </CardText>
          </MisionCards>
          <MisionCards>
            <CardImg>
              <h4>Seguimiento de empresas</h4>
              <i>
                <TfiStatsUp />
              </i>
            </CardImg>
            <CardText>
              <p>
                Acompañar el crecimiento de las Pymes identificando los canales
                correspondientes para logar los objetivos propuestos.
              </p>
            </CardText>
          </MisionCards>
          <MisionCards>
            <CardImg>
              <h4>Conformidad con el cliente</h4>
              <i>
                <FaRegHandshake />
              </i>
            </CardImg>
            <CardText>
              <p>
                Trascender las expectativas de nuestros clientes para que se
                conviertan en nuestros aliados estratégicos.
              </p>
            </CardText>
          </MisionCards>
        </MisionCardsWrapper>
      </MisionSection>
    </>
  );
};

export default Mision;
