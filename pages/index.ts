/* Import io from 'socket.io-client' */

/* Const socket = io.connect("http://localhost:3001") */

import { GetServerSidePropsContext } from "next";
import Month from "../components/month";
import withCSR from "../dependencies/with-CSR";
export default Month;

export const getServerSideProps = withCSR(
  async (ctx: GetServerSidePropsContext) => {
    return {
      props: {},
    };
  }
);
