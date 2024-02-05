import React from "react";
import {
  TeamCard,
  TeamCardFoto,
  TeamCardRedes,
  TeamCardText,
  TeamCardsWrapper,
  TeamWrapper,
} from "./TeamStyles";
import FotoFede from "../../assets/fede.png";
import FotoPerfil2 from "../../assets/gyf-foto2.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <>
      <TeamWrapper>
        <h2>
          Nuestro Equipo<div className="line"></div>
        </h2>

        <TeamCardsWrapper>
          <TeamCard>
            <TeamCardFoto>
              <img src={FotoFede} alt="" />
            </TeamCardFoto>
            <TeamCardText>
              <h4>Federico Irungaray</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas odit ullam nam numquam fugit voluptatum quia eum non et
                tempora.
              </p>
            </TeamCardText>
            <TeamCardRedes>
              <a href="https://wa.me/5493415826686" target="_blank">
                <IoLogoWhatsapp style={{ color: "#25d366" }} />
              </a>
              <a
                href="https://www.instagram.com/federico_irungaray/"
                target="_blank"
              >
                <FaInstagram style={{ color: "#FC283B" }} />
              </a>
              <a href="" target="_blank">
                <FaLinkedin style={{ color: "#0A66C2" }} />
              </a>
            </TeamCardRedes>
          </TeamCard>
          <div className="vertical-line"></div>
          <TeamCard>
            <TeamCardFoto>
              <img src={FotoPerfil2} alt="" />
            </TeamCardFoto>
            <TeamCardText>
              <h4>Federico Irungaray</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas odit ullam nam numquam fugit voluptatum quia eum non et
                tempora.
              </p>
            </TeamCardText>
            <TeamCardRedes>
              <a href="https://wa.me/5493415826686" target="_blank">
                <IoLogoWhatsapp style={{ color: "#25d366" }} />
              </a>
              <a
                href="https://www.instagram.com/federico_irungaray/"
                target="_blank"
              >
                <FaInstagram style={{ color: "#FC283B" }} />
              </a>
              <a href="" target="_blank">
                <FaLinkedin style={{ color: "#0A66C2" }} />
              </a>
            </TeamCardRedes>
          </TeamCard>
        </TeamCardsWrapper>
      </TeamWrapper>
    </>
  );
};

export default Team;
