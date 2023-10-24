import SelectMode from "./mode";
import Search from "./search";
import Settings from "./settings";
import styles from "./styles.module.css";
import MenuBar from "./menuBar";
import Today from "./today";
import LeftNRight from "./leftRight";
import { useSelector } from "react-redux";
import Image from "next/image";
import Title from "./title";
import React, { memo } from "react";
import Support from "./support";

import { SampleData } from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";

import SmallCalendar from "../smallCalendar";
import { Box, Modal } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import VisibleDate from "./date";
import useBoolean from "../../hooks/useBoolean";

function Header() {
  const { open, onOpen, onClose } = useBoolean();
  const day = new Date().getDate();

  return (
    <Box sx={sxStyle.header}>
      <Box sx={sxStyle.item}>
        <MenuBar />
        <Box sx={sxStyle.logo}>
          <Image
            src={"/icons8-google-calendar-48.png"}
            height={60}
            width={60}
          />
          <Box sx={sxStyle.logoCurrent}>{day}</Box>
        </Box>
        <Title />
        {/* <Box className={styles.line}></Box> */}
        <Today />
        <LeftNRight />
      </Box>
      <Box sx={sxStyle.item}>
        <VisibleDate onOpen={onOpen} />
      </Box>
      <Box sx={sxStyle.item}>
        <Search />
        <Support />
        <Settings />
        <SelectMode />
      </Box>
      {open && <SmallCalendar open={open} onClose={onClose} />}
    </Box>
  );
}
export default memo(Header);
