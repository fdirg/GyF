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
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
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
              <img src={FotoFede} alt="Foto Federico Irungaray" />
            </TeamCardFoto>
            <TeamCardText>
              <h4>Federico M. Irungaray</h4>
              <p>Socio Fundador</p>
            </TeamCardText>
            <TeamCardRedes>
              <a href="https://wa.me/5493415826686" target="_blank">
                <IoLogoWhatsapp style={{ color: "#25d366" }} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpxVzcdwxQSrXWmmkWkTLrjRMhNgRvGwKwVBzHDLVsRkBgdcZqdktGHJKVtlqMwjFRjB">
                <MdOutlineEmail style={{ color: "#FC283B" }} />
              </a>
              <a
                href="https://www.instagram.com/federico_irungaray/"
                target="_blank"
              >
                <FaInstagram style={{ color: "#FC283B" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/federico-irungaray-7a84b96a/"
                target="_blank"
              >
                <FaLinkedin style={{ color: "#0A66C2" }} />
              </a>
            </TeamCardRedes>
          </TeamCard>
          <div className="vertical-line"></div>
          <TeamCard>
            <TeamCardFoto>
              <img src={FotoPerfil2} alt="Foto Gaston Dalla Marta" />
            </TeamCardFoto>
            <TeamCardText>
              <h4>Gaston Dalla Marta</h4>
              <p>Socio fundador</p>
            </TeamCardText>
            <TeamCardRedes>
              <a href="https://wa.me/5493416045803" target="_blank">
                <IoLogoWhatsapp style={{ color: "#25d366" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaston-dalla-marta-ab9285123/"
                target="_blank"
              >
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
