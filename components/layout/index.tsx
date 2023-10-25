import LeftBar from "../leftBar";
import React, { memo } from "react";
import Header from "../header";
import RightBar from "../rightBar";
import useBoolean from "../../hooks/useBoolean";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";

function Layout({ children }: { children: React.ReactNode }) {
  const { open, setToggle } = useBoolean();
  return (
    <>
      <Header setToggle={setToggle} />
      <Box sx={sxStyle.body}>
        {open && <LeftBar />}
        {children}
        <RightBar />
      </Box>
    </>
  );
}

export default memo(Layout);
