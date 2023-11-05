import Image from "next/image";
import React, { memo } from "react";
import { Box } from "@mui/material";
import SelectMode from "./mode";
import Search from "./search";
import MenuBar from "./menuBar";
import Today from "./today";
import LeftNRight from "./leftRight";
import Title from "./title";
import ModalContainer from "../modal";

import SmallCalendar from "../smallCalendar";
import sxStyle from "./sxStyle.sx";
import VisibleDate from "./date";
import useBoolean from "../../hooks/useBoolean";
import SignModal from "./sign";

type HeaderTypes = {
  setToggle?: () => void;
};
const Header = ({ setToggle }: HeaderTypes): JSX.Element => {
  const { open, onOpen, onClose } = useBoolean();
  const day = new Date().getDate();

  return (
    <Box sx={sxStyle.header}>
      <Box sx={sxStyle.item}>
        <MenuBar setToggle={setToggle} />
        <Box sx={sxStyle.logo}>
          <Image
            src="/icons8-google-calendar-48.png"
            height={60}
            width={60}
            alt="icon"
          />
          <Box sx={sxStyle.day}>{day}</Box>
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
        <SelectMode />
        <SignModal />
      </Box>

      {open && (
        <ModalContainer open={open} onClose={onClose}>
          <SmallCalendar onClose={onClose} />
        </ModalContainer>
      )}
    </Box>
  );
};
export default memo(Header);
