// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    font-family: 'Pretendard', sans-serif;
    width: 100%;
    height: 100%;
    overflow-x: auto;
  }

  #root {
    width: 1440px;
    margin: 0 auto;
    background-color: white;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
