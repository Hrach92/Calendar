import { Box } from "@mui/material";
import React, { memo } from "react";

/* Import { useDispatch, useSelector } from 'react-redux'; */
import SearchIcon from "@mui/icons-material/Search";
import sxStyle from "./sxStyle.sx";

function Search(): JSX.Element {
  /*
   *     Const state = useSelector(state=>state.sampleData)
   *     const dispatch = useDispatch()
   */
  return (
    <Box sx={sxStyle.container}>
      <SearchIcon sx={sxStyle.search} />
    </Box>
  );
}
export default memo(Search);
