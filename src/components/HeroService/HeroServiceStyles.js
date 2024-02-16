import styled from "styled-components";

export const HeroServiceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroServiceImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    @media (max-width: 760px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  @media (max-width: 760px) {
    width: 100%;
    position: relative;
  }
`;

export const HeroServiceTextWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #344e41;
  text-align: center;
  .line {
    height: 3px;
    width: 50%;
    background-color: #344e41;
    margin-bottom: 2rem;
    @media (max-width: 760px) {
      background-color: #fff;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 2.8rem;
    margin: 0 1rem 5px 2rem;
  }
  p {
    font-weight: 500;
    max-width: 500px;
    margin: 0 1rem 1rem 2rem;
    text-align: left;
  }
  @media (max-width: 1030px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 760px) {
    width: 100%;
    position: absolute;
    color: #fff;
    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
