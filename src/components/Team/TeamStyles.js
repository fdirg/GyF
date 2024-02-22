import styled from "styled-components";

export const TeamWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  h2 {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 590px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const TeamCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14rem;
  @media (max-width: 700px) {
    gap: 4rem;
    flex-direction: column;
  }
  .vertical-line {
    height: 80%;
    width: 2px;
    background-color: #344e41;
  }
`;

export const TeamCard = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const TeamCardFoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    @media (max-width: 915px) {
      width: 220px;
      height: 220px;
    }
  }
`;

export const TeamCardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 1.4rem;
    font-weight: 600;
  }
  p {
    max-width: 200px;
    font-weight: 500;
  }
`;

export const TeamCardRedes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  a {
    font-size: 1.6rem;
    transition: all 0.5s;
  }
  a:hover {
    scale: 1.2;
  }
`;
