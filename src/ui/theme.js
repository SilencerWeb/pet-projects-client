import { createGlobalStyle, css } from 'styled-components';
import normalize from 'normalize.css/normalize.css';


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
  }
`;


export const GlobalStyles = createGlobalStyle`${normalize} ${globalStyles}`;
