import React from "react";
import { HomeWrapper } from "./HomeStyles";
import Hero from "../../components/Hero/Hero";
import Mision from "../../components/Mision/Mision";
import Inspiracion from "../../components/Inspiracion/Inspiracion";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Hero />
        <Mision />
        <Inspiracion />
      </HomeWrapper>
    </>
  );
};

export default Home;
