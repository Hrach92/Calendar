import { Provider } from "react-redux";
import "../styles/globals.css";
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { store } from "../store/store";
import Layout from "../components/layout";
import LocalProvider from "../features/providers/localProvider";
import theme from "../dependencies/utils/mui";
import { pageView } from "../dependencies/events";
import GoogleAnalytics from "../components/googleAnalytics";

const MyApp = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  const { locale, locales, defaultLocale } = pageProps;
  const { events, asPath } = useRouter();

  useEffect(() => {
    const handleRouteChange = (): void => pageView(asPath);
    events.on("routeChangeComplete", handleRouteChange);
  }, [asPath, events]);

  return (
    <main>
      <GoogleAnalytics
        measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID}
      />
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
    </main>
  );
};

export default MyApp;
