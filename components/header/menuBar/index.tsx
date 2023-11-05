import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";

type MenuTypes = {
  setToggle?: () => void;
};
const MenuBar = ({ setToggle = () => {} }: MenuTypes): JSX.Element => (
  <Box sx={sxStyle.menu} onClick={setToggle}>
    <MenuOutlinedIcon />
  </Box>
);
export default MenuBar;
