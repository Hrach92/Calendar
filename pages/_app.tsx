import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/store";
import React from "react";
import { AppProps } from "next/app";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
