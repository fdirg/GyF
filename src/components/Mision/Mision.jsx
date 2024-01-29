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
      <MisionSection>
        <MisionTextWrapper>
          <h2 className="slide-right">
            Como equipo de trabajo, nuestra mision es:
          </h2>
        </MisionTextWrapper>
        <MisionCardsWrapper>
          <MisionCards>
            <CardImg>
              <h4>Desarrollo</h4>
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
              <h4>Seguimiento</h4>
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
              <h4>Conformidad</h4>
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
