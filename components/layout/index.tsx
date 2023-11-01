import React, { memo } from "react";
import { Box } from "@mui/material";
import LeftBar from "../leftBar";
import Header from "../header";
import RightBar from "../rightBar";
import useBoolean from "../../hooks/useBoolean";
import sxStyle from "./sxStyle.sx";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
};

export default memo(Layout);
