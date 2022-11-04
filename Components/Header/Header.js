import SelectMode from "./Mui";
import Search from "./Search";
import MenuPopupState from "./Settings";
import header from "./Header.module.css";
import table from "../Table.module.css";
import MenuBar from "./MenuButton";
import Today from "./Today";
import LeftNRight from "./LeftRight";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import Title from "./Title";
import React, {useMemo, useState} from "react";
import Link from "next/link";
import Support from "./Support";
import moment, {weekdaysMin} from "moment";
import {dayList} from "../Instance";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { SampleData, setMode } from "../../store/reducer/sampleReducer";
import { Tabs, tabs } from "../../store/reducer/tabReducer";
import { BarOpen } from "../../store/reducer/menuReducer";
import { closeColor, closeCreate, closeSmall, descriptionOpen } from "../../store/reducer/tabReducer";
import { setDay, setMonth, setNotesOpen } from "../../store/reducer/sampleReducer"
import SmallCalendar from "../SmallCalendar/SmallCalendar";


function Header () {
    const state = useSelector(SampleData),
        tabs = useSelector(Tabs),
        bars = useSelector(BarOpen),
        [
            open,
            setOpen
        ] = useState(false),
        [
            date,
            setDate
        ] = useState({
            "year": state.year,
            "month": state.month.monthNumber
        }),
        dispatch = useDispatch(),
        days = useMemo(()=>{
                return dayList(
            date.year,
            date.month
                )},[date.year,date.month]);
    return <header className={header.header} onClick={() => {
        return open ? setOpen(false) : /* dispatch(closeColor(false)),dispatch(closeCreate(false)),dispatch(descriptionOpen(false)) 
        dispatch(setNotesOpen(false))(tabs.small?dispatch(closeSmall(false)):null)*/null
    }}>
        <div className={bars.leftBarOpen ? header.closeBtn : header.addBtn} onClick={() => {
            return open ? setOpen(false) : setOpen(true)
        }}><Image src={'/icons8-add-67.png'} height={52} width={52}/></div>
        {open ? <div className={table.lnbEvents}>
            <Link href={'/events'}><div onClick={() => {
                return open ? setOpen(false) : setOpen(true)
            }} className={table.lnbEvent}>Events</div></Link>
            <div onClick={() => {
                return open ? setOpen(false) : setOpen(true)
            }} className={table.lnbEvent}>Tasks</div>
        </div> : null}
        <div className={header.logo}><Image src={'/icons8-google-calendar-48.png'} height={60} width={60} />
            <div className={header.logoCurrent}>{new Date().getDate()}</div>
        </div>
        <div className={header.title}><Title /></div>
        <div className={header.line}></div>
        <div><Today /></div>
        <div><LeftNRight /></div>
        <div className={header.showDate} onClick={() => bars.leftBarOpen ? dispatch(closeSmall(false)):(tabs.small?dispatch(closeSmall(false)):dispatch(closeSmall(true)))}>{state.month.title} {state.day}, {state.year}</div>
        {tabs.small? <div className={header.smallCalendar}>
            <SmallCalendar/>
        </div> : null}
        <div><MenuBar /></div>
        <div><Search /></div>
        <div><Support /></div>
        <div><MenuPopupState /></div>
        <div><SelectMode /></div>
    </header>

}
export default Header;
