import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Image from "next/image";
import { Box } from "@mui/material";
import { SampleData } from "../../store/reducer/sampleReducer";
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
