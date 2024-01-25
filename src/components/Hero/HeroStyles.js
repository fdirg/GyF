import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HeroTextWrapper = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  gap: 2rem;
  div {
    width: 968px;
    max-width: 968px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 4px 0;
    text-transform: uppercase;
  }
  h3 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 0 10px 0;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0 0 5px 0;
    text-transform: uppercase;
  }
  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  img {
    width: 100%;
    height: auto;
    max-height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
  }
`;
