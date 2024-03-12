import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
 *, *::before, *::after {
    box-sizing: border-box;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

body {
  margin: 0;
  padding: 0;
  /* color:   ${({ theme }) => theme.colors.text.primary}; */
  color: var(--bukarka-black);
  background-color: var(--bukarka-light-grey-1);
  min-width: 320px;

}

/* 
p:last-child {
  margin-bottom: 0;
} */

ul, ol, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


a{
    text-decoration: none;
};


*:focus-visible  {
  outline: 2px solid var(--bukarka-black) ;
  border-radius:2px; 
}
`;
