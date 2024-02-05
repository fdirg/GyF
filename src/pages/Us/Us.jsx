import React from "react";
import { UsWrapper } from "./UsStyles";
import HeroUs from "../../components/HeroUs/HeroUs";
import Team from "../../components/Team/Team";

const Us = () => {
  return (
    <>
      <UsWrapper>
        <HeroUs />
        <Team />
      </UsWrapper>
    </>
  );
};

export default Us;
