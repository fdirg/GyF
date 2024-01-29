import styled from "styled-components";

export const MisionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  color: #344e41;
  padding: 2rem 0;
`;

export const MisionTextWrapper = styled.div`
  width: 1100px;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .equipo-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

export const MisionCardsWrapper = styled(MisionTextWrapper)`
  width: 1000px;
  justify-content: space-between;
`;

export const MisionCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  min-height: 230px;
  border-radius: 15px;
  padding: 0 1rem;
  background-color: #e5e2dc;
  transition: transform 1s;
  &:hover {
    transform: rotateY(180deg);
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
  }
  i {
    font-size: 2.2rem;
  }
`;

export const CardText = styled(CardImg)`
  padding-bottom: 1rem;
  p {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: #344e41;
  }
`;
