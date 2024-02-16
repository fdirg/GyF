import styled from "styled-components";

export const InspiracionWrapper = styled.section`
  width: 1100px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 950px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const InspiracionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 2rem;
  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 950px) {
    align-items: center;
  }
`;

export const InspiracionImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
    border-radius: 1rem;
    object-fit: cover;
    height: 500px;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

export const InspiracionCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 950px) {
    align-items: center;
  }
`;

export const InspiracionCard = styled.div`
  max-width: 400px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 14px;
  h5 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    text-align: left;
  }
`;

export const BorderBottom = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  .circle {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #344e41;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    column-gap: 1rem;
  }
  .line {
    height: 1px;
    width: 50%;
    background-color: #344e41;
    margin-bottom: 2rem;
  }
`;
