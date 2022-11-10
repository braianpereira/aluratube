import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
	background-color: ${( {theme} ) => theme.backgroundBase };
	color: ${( {theme} ) => theme.textColorBase };
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  a.nostyle:link {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  a.nostyle:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`;

