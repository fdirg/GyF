import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 90%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
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
  }
`;
