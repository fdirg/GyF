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
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 80%;
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
  }
  .more {
    font-weight: 500;
    a {
      margin-left: 4px;
      color: #344e41;
      padding: 5px 8px;
      border: 1px solid #344e41;
      border-radius: 10px;
      transition: 0.5s;
      font-weight: 600;
      box-shadow: 6px -2px 5px 0px #344e41;
      &:hover {
        background-color: #344e41;
        color: #fff;
      }
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
  flex-wrap: wrap;
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
`;
