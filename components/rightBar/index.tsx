import React, { memo } from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Box } from "@mui/material";
import useBoolean from "../../hooks/useBoolean";
import sxStyle from "./sxStyle.sx";
import Images from "./images";

function RightBar() {
  const { open, setToggle } = useBoolean();
  return (
    <Box>
      {open && <Images />}
      <Box sx={sxStyle.button} onClick={setToggle}>
        {open ? <ChevronRightOutlinedIcon /> : <ChevronLeftOutlinedIcon />}
      </Box>
    </Box>
  );
}
export default memo(RightBar);
