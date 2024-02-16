import styled from "styled-components";

export const HeroUsWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const HeroUsTextWrapper = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(to bottom, #bccddd, #e2ebf2, #f4f5f7);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 800px) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media (max-width: 590px) {
    width: 100%;
  }
`;

export const HeroUsTextLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 590px) {
    flex-direction: column;
  }
  h2 {
    font-size: 5rem;
    font-weight: 600;
    font-style: italic;
    @media (max-width: 1000px) {
      font-size: 3rem;
    }
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    font-style: italic;
    line-height: 0.1rem;
    text-align: center;
    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    @media (max-width: 1000px) {
      font-size: 0.8rem;
    }
  }
`;

export const HeroUsTextDescription = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 2rem;
  p {
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 590px) {
    max-width: 400px;
  }
`;

export const HeroUsImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 590px) {
    display: none;
  }
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    @media (max-width: 800px) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;
