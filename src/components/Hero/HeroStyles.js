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

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;
  img {
    width: 100%;
    height: auto;
  }
`;

export const HeroTextWrapper = styled.div`
  position: absolute;
  width: 1100px;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;
