import SelectMode from "./Mui";
import Search from "./search";
import Settings from "./settings";
import styles from "./styles.module.css";
import table from "../Table.module.css";
import MenuBar from "./menuBar";
import Today from "./today";
import LeftNRight from "./leftRight";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Title from "./title";
import React, { memo, useState } from "react";
import Link from "next/link";
import Support from "./support";

import { SampleData } from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";
import { BarOpen } from "../../store/reducer/menuReducer";
import { closeSmall } from "../../store/reducer/tabReducer";

import SmallCalendar from "../smallCalendar";
import { Box } from "@mui/material";

function Header() {
  const state = useSelector(SampleData),
    tabs = useSelector(Tabs),
    bars = useSelector(BarOpen),
    [open, setOpen] = useState(false),
    dispatch = useDispatch();

  return (
    <header
      className={styles.header}
      onClick={() => {
        return open
          ? setOpen(false)
          : /* dispatch(closeColor(false)),dispatch(closeCreate(false)),dispatch(descriptionOpen(false)) 
        dispatch(setNotesOpen(false))(tabs.small?dispatch(closeSmall(false)):null)*/ null;
      }}
    >
      <Box
        className={bars.leftBarOpen ? styles.closeBtn : styles.addBtn}
        onClick={() => {
          return open ? setOpen(false) : setOpen(true);
        }}
      >
        <Image src={"/icons8-add-67.png"} height={52} width={52} />
      </Box>
      {/*       {open ? (
        <Box className={table.lnbEvents}>
          <Link href={"/events"}>
            <Box
              onClick={() => {
                return open ? setOpen(false) : setOpen(true);
              }}
              className={table.lnbEvent}
            >
              Events
            </Box>
          </Link>
          <Box
            onClick={() => {
              return open ? setOpen(false) : setOpen(true);
            }}
            className={table.lnbEvent}
          >
            Tasks
          </Box>
        </Box>
      ) : null} */}
      <Box className={styles.logo}>
        <Image src={"/icons8-google-calendar-48.png"} height={60} width={60} />
        <Box className={styles.logoCurrent}>{new Date().getDate()}</Box>
      </Box>
      <Box className={styles.title}>
        <Title />
      </Box>
      <Box className={styles.line}></Box>
      <Box>
        <Today />
      </Box>
      <Box>
        <LeftNRight />
      </Box>
      <Box
        className={styles.showDate}
        onClick={() =>
          bars.leftBarOpen
            ? dispatch(closeSmall(false))
            : tabs.small
            ? dispatch(closeSmall(false))
            : dispatch(closeSmall(true))
        }
      >
        {state.month.title} {state.day}, {state.year}
      </Box>
      {tabs.small && (
        <Box className={styles.smallCalendar}>
          <SmallCalendar />
        </Box>
      )}

      <MenuBar />
      <Search />
      <Support />
      <Settings />
      <SelectMode />
    </header>
  );
}
export default memo(Header);
