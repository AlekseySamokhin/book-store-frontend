import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, 
  ::after,
  ::before
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  html {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
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

  button:focus,
  textarea:focus {
   outline: none;
  }

  a {
    display: inherit;
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyle };
