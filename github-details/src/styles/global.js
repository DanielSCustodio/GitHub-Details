import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body{
    background-color: #0D1117;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #8b949e;
    font-size: 14px;
    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
