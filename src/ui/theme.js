import { createGlobalStyle, css } from 'styled-components';
import normalize from 'normalize.css/normalize.css';


export const color = {
  primary: '#0068ff',
  onPrimary: '#ffffff',
  secondary: '#243244',
  onSecondary: '#ffffff',
};


const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 32rem;
    font-family: "Rubik", sans-serif;
    color: ${color.secondary};
  }
`;

export const GlobalStyles = createGlobalStyle`${normalize} ${globalStyles}`;
