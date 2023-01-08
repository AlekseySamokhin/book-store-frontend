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

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyle };
