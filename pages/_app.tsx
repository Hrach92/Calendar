import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/store";
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import LocalProvider from "../features/providers/localProvider";
import { ThemeProvider } from "@mui/material";
import theme from "../dependencies/utils/mui";
import { pageView } from "../dependencies/events";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, locales, defaultLocale } = pageProps;
  const { events, asPath } = useRouter();

  useEffect(() => {
    const handleRouteChange = (): void => pageView(asPath);
    events.on("routeChangeComplete", handleRouteChange);
  }, [asPath, events]);

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
