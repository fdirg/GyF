import React from "react";
import { HomeWrapper } from "./HomeStyles";
import Hero from "../../components/Hero/Hero";
import Mision from "../../components/Mision/Mision";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Hero />
        <Mision />
      </HomeWrapper>
    </>
  );
};

export default Home;
