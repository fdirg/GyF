import React from "react";
import {
  ClientLogo,
  ClientsImages,
  ClientsTitle,
  ClientsWrapper,
} from "./ClientsStyles";
import BidImage from "../../assets/bid.png";
import SialLogo from "../../assets/sial-logo.svg";
import Ruta12Logo from "../../assets/ruta12logo.png";
import RialLogo from "../../assets/rial-logo.jpg";
import TorresiLogo from "../../assets/torresilogo.svg";
import SemtracoLogo from "../../assets/semtraco-logo.svg";
import MaximaEnergiaLogo from "../../assets/maximaenergialogo.png";
import LasBrisasLogo from "../../assets/las-brisas-logo.webp";
import MontechiariLogo from "../../assets/montechiari-logo.jpg";
import GrupoPorcimonteLogo from "../../assets/grupo-porcimonte-logo.jpg";

const Clients = () => {
  return (
    <>
      <ClientsWrapper id="clientes">
        <ClientsTitle>
          <h2>Clientes que confiaron en nuestro servicio</h2>
          <div className="line"></div>
        </ClientsTitle>
        <ClientsImages>
          <ClientLogo>
            <img src={BidImage} alt="Bid Argentina" />
          </ClientLogo>
          <ClientLogo>
            <img src={SialLogo} alt="Sial Ingeniera" />
          </ClientLogo>
          <ClientLogo>
            <img
              src={Ruta12Logo}
              alt="Ruta 12"
              style={{ backgroundColor: "#2D2D32", padding: "10px" }}
            />
          </ClientLogo>
          <ClientLogo>
            <img src={RialLogo} alt="Rial" />
          </ClientLogo>
          <ClientLogo>
            <img src={TorresiLogo} alt="Torresi" />
          </ClientLogo>
          <ClientLogo>
            <img
              src={SemtracoLogo}
              alt="Semtraco"
              style={{
                backgroundColor: "#2D2D32",
                padding: "0 10px",
                height: "60px",
              }}
            />
          </ClientLogo>
          <ClientLogo style={{ maxWidth: "200px" }}>
            <img src={MaximaEnergiaLogo} alt="Maxima Energia" />
          </ClientLogo>
          <ClientLogo>
            <img src={LasBrisasLogo} alt="Las Brisas" />
          </ClientLogo>
          <ClientLogo className="montechiari">
            <img src={MontechiariLogo} alt="Montechiari" />
          </ClientLogo>
          <ClientLogo className="porcimonete">
            <img src={GrupoPorcimonteLogo} alt="Grupo Porcimonte" />
          </ClientLogo>
        </ClientsImages>
      </ClientsWrapper>
    </>
  );
};

export default Clients;
