import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box } from "@mui/material";

import sxStyle from "./sxStyle.sx";

function Support() {
  return (
    <Box sx={sxStyle.container}>
      <HelpOutlineIcon sx={sxStyle.support} />
    </Box>
  );
}
export default Support;
