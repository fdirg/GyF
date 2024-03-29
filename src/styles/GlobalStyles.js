import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

  html{
    scroll-behavior: smooth;
  }

    body {
    background: #F8F4F2;
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
