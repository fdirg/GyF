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
    opacity: 1;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
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
  }
  h2 {
    text-transform: uppercase;
    font-size: 2.8rem;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    max-width: 500px;
    margin-bottom: 2rem;
    text-align: left;
  }
`;
