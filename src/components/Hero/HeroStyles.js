import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 4px 0;
    @media (max-width: 740px) {
      font-size: 3rem;
    }
    @media (max-width: 620px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 10px 0;
    @media (max-width: 740px) {
      font-size: 1.5rem;
    }
    @media (max-width: 620px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 740px) {
      font-size: 1rem;
    }
    @media (max-width: 620px) {
      font-size: 0.8rem;
    }
  }
  span {
    font-weight: 700;
  }
`;

export const HeroImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  img {
    width: 100%;
    height: 550px;
    border-radius: 20px;
    object-fit: cover;
    opacity: 0.9;
    @media (max-width: 960px) {
      border-radius: 0px;
    }
  }
`;
