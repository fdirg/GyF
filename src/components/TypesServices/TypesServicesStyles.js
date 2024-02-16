import styled from "styled-components";

export const TypeServiceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e2dc;
`;

export const TypeServiceText = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #344e41;
  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    max-width: 500px;
    margin-bottom: 4px;
    text-align: left;
  }
  .line {
    height: 3px;
    width: 50%;
    background-color: #344e41;
    margin: 10px;
  }
  p {
    padding-top: 1rem;
    max-width: 500px;
    text-align: left;
  }
  .text-finance {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 760px) {
      align-items: center;
      h3 {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 915px) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 760px) {
    width: 100%;
    padding: 2rem 0;
    align-items: center;
    h2 {
      max-width: 600px;
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      max-width: 300px;
    }
  }
`;

export const TypeFinanceWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const CardFinance = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  padding-top: 1rem;
  text-align: left;
  i {
    font-size: 2.2rem;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    max-width: 200px;
  }
  @media (max-width: 760px) {
    justify-content: center;
    i {
      font-size: 1.8rem;
    }
    p {
      font-size: 12px;
      max-width: 80px;
    }
  }
`;

export const TypeServiceImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 580px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    object-fit: cover;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
