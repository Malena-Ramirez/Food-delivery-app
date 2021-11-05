import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }

  body{
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;