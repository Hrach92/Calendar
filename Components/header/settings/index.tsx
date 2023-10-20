import SettingsIcon from "@mui/icons-material/Settings";
import React, { memo } from "react";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";

function Settings(): JSX.Element {
  return (
    <Box sx={sxStyle.settingsComponent}>
      <SettingsIcon sx={sxStyle.settings} />
    </Box>
  );
}
export default memo(Settings);
