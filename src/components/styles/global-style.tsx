import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MarkOT-Bold';
    src: url('/fonts/MarkOT-Bold.otf') format(opentype);
  }

  @font-face {
    font-family: 'MarkOT-Book';
    src: url('/fonts/MarkOT-Book.otf') format(opentype);
  }

  @font-face {
    font-family: 'MarkOT-Regular';
    src: url('/fonts/MarkOT-Regular.otf') format(opentype);
  }

  @font-face {
    font-family: 'MarkOT-Thin';
    src: url('/fonts/MarkOT-Thin.otf') format(opentype);
  }

  @font-face {
    font-family: 'MarkOT';
    src: url('/fonts/MarkOT.otf') format(opentype);
  }

  ol {
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'MarkOT-Regular';
  }

  p, span {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  h2 {
    font-size: 28px;
    font-weight: lighter;
    color: ${props => props.theme.colors.quaternary};
    padding: 0;
    margin: 0;
  }
`