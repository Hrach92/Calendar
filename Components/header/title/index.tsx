import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Title(): JSX.Element {
  return (
    <Link href={"/"}>
      <Typography>Calendar</Typography>
    </Link>
  );
}
export default Title;
