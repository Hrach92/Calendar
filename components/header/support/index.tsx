import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box, Typography } from "@mui/material";

import sxStyle from "./sxStyle.sx";
import Trans from "../../trans";

const Support = (): JSX.Element => (
  <Box sx={sxStyle.container}>
    <Typography sx={sxStyle.text}>
      <Trans word="support" />
    </Typography>
    <HelpOutlineIcon sx={sxStyle.support} />
  </Box>
);
export default Support;
