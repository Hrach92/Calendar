import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/store";
import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import LocalProvider from "../features/providers/localProvider";
import { ThemeProvider } from "@mui/material";
import theme from "../dependencies/utils/mui";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, locales, defaultLocale } = pageProps;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalProvider
          locale={locale}
          locales={locales}
          defaultLocale={defaultLocale}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
