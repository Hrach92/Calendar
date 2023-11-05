/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
/* import { getCookie } from "@/dependencies/auth";
import { THEME } from "@/dependencies/constants";
import { EnumsTheme } from "@/dependencies/enums"; */

/* type DocumentPops = {
  __NEXT_DATA__: { props: { pageProps: { cookie: string } } };
}; */

const Document = (): JSX.Element => (
  // const pageProps = props["__NEXT_DATA__"].props?.pageProps;
  /*   const dataTheme =
    getCookie(pageProps.cookie, THEME) || String(EnumsTheme.dark); */
  <Html /* data-theme={dataTheme} */>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
