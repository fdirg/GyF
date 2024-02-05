import styled from "styled-components";

export const HeroUsWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const HeroUsTextLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  h2 {
    font-size: 5rem;
    font-weight: 600;
    font-style: italic;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    font-style: italic;
    line-height: 0.1rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const HeroUsTextDescription = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const HeroUsImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
