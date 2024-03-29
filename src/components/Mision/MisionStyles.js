import styled, { keyframes } from "styled-components";

export const MisionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #344e41;
  padding: 1rem 0 2rem 0;
  .line {
    height: 1px;
    width: 50%;
    background-color: #344e41;
    margin-bottom: 2rem;
  }
`;

export const MisionTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    @media (max-width: 780px) {
      text-align: center;
    }
  }
`;

export const MisionCardsWrapper = styled(MisionTextWrapper)`
  max-width: 1100px;
  justify-content: space-between;
  gap: 10rem;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const MisionCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 200px;
  border-radius: 15px;
  padding: 0 1rem;
  background-color: #e5e2dc;
  box-shadow: 5px 2px 2px 0px #999;
  @media (min-width: 1100px) {
    &:hover {
      p {
        opacity: 1;
        transition-duration: 0.5s;
        transition-delay: 0.5s;
      }
      h4,
      i {
        transform: translateY(0);
        transition-duration: 0.5s;
        transition-delay: 0s;
      }
    }
  }
  @media (max-width: 1100px) {
    max-width: 500px;
    padding: 1rem 2rem;
    flex-direction: row;
    gap: 2rem;
  }
  @media (max-width: 590px) {
    max-width: 300px;
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: 370px) {
    max-width: 200px;
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
  h4 {
    text-transform: uppercase;
    text-align: center;
  }
  i {
    font-size: 2.2rem;
  }
  h4,
  i {
    transform: translateY(55px);
    transition-duration: 0.5s;
    transition-delay: 0.5s;
    transition-timing-function: ease-out;
  }
  @media (max-width: 1100px) {
    h4,
    i {
      transform: translateY(0);
    }
  }
`;

export const CardText = styled(CardImg)`
  padding-bottom: 1rem;
  @media (min-width: 1100px) {
    p {
      opacity: 0;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 500;
      color: #344e41;
      transition-duration: 0.5s;
    }
  }
`;
