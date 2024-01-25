import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #F8F4F2;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    color: #455e5e;
    }

    a {
       text-decoration: none;
       color: #fff;
    }

    li {
    list-style: none;
    }

`;
