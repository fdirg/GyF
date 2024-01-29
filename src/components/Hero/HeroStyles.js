import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HeroTextWrapper = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  div {
    width: 968px;
    max-width: 968px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    color: #fff;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 4px 0;
    text-transform: uppercase;
  }
  h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 10px 0;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  span {
    font-weight: 700;
  }
  button {
    padding: 10px;
    border: 1px solid #b3c9d0;
    background-color: #598392;
    margin-top: 1rem;
    transition: 0.5s;
    border-radius: 8px;
    a {
      padding: 6px;
      font-weight: 400;
      font-size: 14px;
      color: #fff;
      transition: 0.8s;
    }
    &:hover {
      scale: 1.1;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  video {
    width: 98%;
    height: 500px;
    border-radius: 1rem;
    object-fit: cover;
  }
`;
