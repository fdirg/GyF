import React from "react";
import {
  CardFinance,
  TypeFinanceWrapper,
  TypeServiceImage,
  TypeServiceText,
  TypeServiceWrapper,
} from "./TypesServicesStyles";
import ServiceImage from "../../assets/serviceimage.jpg";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { TbBrandCashapp } from "react-icons/tb";
import { CiViewTimeline } from "react-icons/ci";

const TypesServices = () => {
  return (
    <>
      <TypeServiceWrapper>
        <TypeServiceText>
          <h2>Financiamiento para PyMes, instituciones y cooperativas </h2>
          <div className="line"></div>
          <p>
            Brindamos orientación especializada para que encuentren la solución
            que mejor se ajuste a sus requerimientos.
          </p>
          <p>
            Financiamiento tradicional de acuerdo a su necesidades, destino y
            flujo de caja explorando distintas opciones.
          </p>
          <div className="text-finance">
            <h3>Tipos de financiamiento:</h3>
            <TypeFinanceWrapper>
              <CardFinance>
                <i>
                  <TbBrandCashapp />
                </i>
                <p>Cheques de pago diferido</p>
              </CardFinance>
              <CardFinance>
                <i>
                  <LiaMoneyBillWaveAltSolid />
                </i>
                <p>Pagare bursatil</p>
              </CardFinance>
              <CardFinance>
                <i>
                  <CiViewTimeline />
                </i>
                <p>ON PyMe y regimen general</p>
              </CardFinance>
            </TypeFinanceWrapper>
          </div>
        </TypeServiceText>
        <TypeServiceImage>
          <img src={ServiceImage} alt="" />
        </TypeServiceImage>
      </TypeServiceWrapper>
    </>
  );
};

export default TypesServices;
