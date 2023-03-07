import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

`;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;