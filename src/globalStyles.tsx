import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, 
  ::after,
  ::before
  {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  div {
   box-sizing: border-box;
  }

  ol, ul {
    list-style-type: none;
  }

  input {
    border: none;
    outline: none;
    resize: none;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
