import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  input {
  all: unset;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
