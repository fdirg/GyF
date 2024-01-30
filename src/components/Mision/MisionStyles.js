import styled from "styled-components";

export const MisionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #f8f4f2;
  color: #344e41;
  padding: 2rem 0;
  .line {
    height: 1px;
    width: 50%;
    background-color: #344e41;
    margin-bottom: 2rem;
  }
`;

export const MisionTextWrapper = styled.div`
  width: 1100px;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
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
  box-shadow: 5px 2px 2px 0px #999;
  &:hover {
    p {
      opacity: 1;
    }
    h4,
    i {
      transform: translateY(0);
    }
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
    transition: ease-out 0.5s;
  }
`;

export const CardText = styled(CardImg)`
  padding-bottom: 1rem;
  p {
    opacity: 0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: #344e41;
    transition: ease-in 0.5s;
  }
`;
