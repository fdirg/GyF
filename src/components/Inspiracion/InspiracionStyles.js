import styled from "styled-components";

export const InspiracionWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
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
`;

export const InspiracionCardsWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
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
