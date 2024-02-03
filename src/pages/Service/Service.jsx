import React from "react";
import { ServiceWrapper } from "./ServiceStyles";
import HeroService from "../../components/HeroService/HeroService";
import TypesServices from "../../components/TypesServices/TypesServices";
import Clients from "../../components/Clients/Clients";

const Service = () => {
  return (
    <>
      <ServiceWrapper>
        <HeroService />
        <TypesServices />
        <Clients />
      </ServiceWrapper>
    </>
  );
};

export default Service;
