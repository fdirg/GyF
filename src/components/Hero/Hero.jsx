import React from "react";
import { HeroImageWrapper, HeroWrapper, HeroTextWrapper } from "./HeroStyles";
import HeroVideo from "../../assets/herovideo.mp4";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroTextWrapper>
          <div>
            <h2>Gestion Empresarial</h2>
            <h3>Management Financiero</h3>
            <p>
              <span>Mas de 25 años de experiencia</span> en el sector financiero
            </p>
            <p>
              Especializados en el sector agropecuario y en industrias
              sustentables
            </p>
            <motion.div whileTap={{ scale: 0.95 }}>
              <button>
                <a href="#mision">Mira mas</a>
              </button>
            </motion.div>
          </div>
        </HeroTextWrapper>
        <HeroImageWrapper>
          <video autoPlay loop muted>
            <source src={HeroVideo} />
          </video>
        </HeroImageWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
