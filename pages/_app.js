import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/Styled.Global";
import Theme from "../styles/Styled.Theme";

const CountryQuiz = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default CountryQuiz;
