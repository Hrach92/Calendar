import {Provider} from "react-redux";
import "../styles/globals.css";
import {store} from "../store/store";
import React from "react";
import {PropTypes} from "prop-types";
import Layout from "../Components/Layout";

function MyApp ({Component, pageProps}) {
    return <>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  </>

}/* 
MyApp.propTypes = {
    "Component": PropTypes.object.isRequired,
    "pageProps": PropTypes.object.isRequired
}; */

export default MyApp;
