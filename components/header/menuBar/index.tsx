import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import styles from "./styles.module.css";
import React, { useCallback } from "react";
import { BarOpen, leftMenuBarOpen } from "../../../store/reducer/menuReducer";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import useBoolean from "../../../hooks/useBoolean";
import { onOpenBar } from "../../../dependencies/instance";
import { useDispatch, useSelector } from "../../../hooks/redux";

function MenuBar() {
  const { leftBarOpen } = useSelector(BarOpen);
  const dispatch = useDispatch();

  const setOpen = useCallback(
    () => dispatch(leftMenuBarOpen(onOpenBar(leftBarOpen))),
    [leftBarOpen, leftMenuBarOpen]
  );

  return (
    <Box sx={sxStyle.menu} onClick={setOpen}>
      <MenuOutlinedIcon />
    </Box>
  );
}
export default MenuBar;
