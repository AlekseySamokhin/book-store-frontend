import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  ol, ul {
    list-style: none;
  }

  input {
    border: none;
    outline: none;
    resize: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
