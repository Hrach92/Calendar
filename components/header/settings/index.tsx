import SettingsIcon from "@mui/icons-material/Settings";
import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Trans from "../../trans";

const Settings = (): JSX.Element => (
  <Box sx={sxStyle.container}>
    <Typography sx={sxStyle.text}>
      <Trans word="settings" />
    </Typography>
    <SettingsIcon sx={sxStyle.settings} />
  </Box>
);
export default memo(Settings);
