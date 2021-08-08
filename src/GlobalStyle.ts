import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --primary: #2a66f5;
  --overPrimary: #fff;

  --lightGray: lightgray;
  --gray: gray;

  --background: #f9f9f9;
  --foreground: #fff;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--primary);
}

body {
  font-family: Ubuntu, serif;
}
`;

export default GlobalStyle;
