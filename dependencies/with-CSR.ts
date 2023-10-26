import { GetServerSidePropsContext, GetServerSideProps } from "next";
import parser from "ua-parser-js";

const withCSR =
  (next: GetServerSideProps) =>
  async (ctx: GetServerSidePropsContext): Promise<any> => {
    const isCSR = ctx.req.url?.startsWith("/_next");
    if (isCSR) return { props: {} };
    const ssrData = await next(ctx);
    const ifReturnProps = "props" in ssrData;
    const deviceType =
      parser(ctx.req.headers["user-agent"]).device.type || "desktop";
    const resolvedUrl = ctx.resolvedUrl;

    if (ifReturnProps) {
      const props = {
        ...ssrData.props,
        locale: ctx.locale,
        locales: ctx.locales,
        defaultLocale: ctx.defaultLocale,
        deviceType,
        resolvedUrl,
      };
      return { ...ssrData, props };
    }
    return { ...ssrData };
  };

export default withCSR;
