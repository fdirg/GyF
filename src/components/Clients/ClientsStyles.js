import styled from "styled-components";

export const ClientsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  background-color: #fff;
`;

export const ClientsTitle = styled.div`
  max-width: 1100px;
  padding: 2rem 2rem 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    color: #344e41;
    text-transform: uppercase;
  }
  .line {
    height: 3px;
    width: 80%;
    background-color: #344e41;
    margin: 10px 0 2rem 0;
  }
  @media (max-width: 880px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 1.6rem;
    }
  }
`;

export const ClientsImages = styled.div`
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  .montechiari {
    max-width: 160px;
  }
  .porcimonete {
    max-width: 140px;
  }
  @media (max-width: 600px) {
    .montechiari {
      max-width: 120px;
    }
    .porcimonete {
      max-width: 100px;
    }
  }
`;

export const ClientLogo = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    max-width: 60px;
  }
`;
