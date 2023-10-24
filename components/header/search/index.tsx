import { Box } from "@mui/material";
import React, { memo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import sxStyle from "./sxStyle.sx";

function Search(): JSX.Element {
  return (
    <Box sx={sxStyle.container}>
      <SearchIcon sx={sxStyle.search} />
    </Box>
  );
}
export default memo(Search);
