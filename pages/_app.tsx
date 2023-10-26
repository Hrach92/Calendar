import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/store";
import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import LocalProvider from "../features/providers/localProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, locales, defaultLocale } = pageProps;

  return (
    <Provider store={store}>
      <LocalProvider
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalProvider>
    </Provider>
  );
}

export default MyApp;
