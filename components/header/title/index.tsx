import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import sxStyle from "./sxStyle.sx";
import Trans from "../../trans";

const Title = (): JSX.Element => (
  <Link href="/">
    <Typography sx={sxStyle.title}>
      <Trans word="calendar" />
    </Typography>
  </Link>
);
export default Title;
