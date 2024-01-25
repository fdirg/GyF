import styled from "styled-components";

export const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .wsp-float {
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 26px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    margin-bottom: 16px;
    .i-float {
      margin-top: 12px;
    }
  }
`;
