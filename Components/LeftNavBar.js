import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {setColor, setColors, setDay, setMode, setMonth, setYear} from "../store/reducer/sampleReducer";
import table from "./Table.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import React, { useEffect, useState} from "react";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {dayList, host} from "./Instance";
import moment, {weekdaysMin} from "moment";
import {AiOutlineCheck} from "react-icons/ai";
import {closeColor, closeCreate} from "../store/reducer/tabReducer";
import { useMemo } from "react";

export default function LeftNavBar(){

    const state = useSelector((state) => state.sampleData),
        tabs = useSelector((state) => state.tabs),
        bars = useSelector((state) => state.openBar),
        dispatch = useDispatch(),
        [
            date,
            setDate
        ] = useState({
            "year": state.year,
            "month": state.month.monthNumber
        }),
        days = useMemo(()=>{
            return dayList(
                date.year,
                date.month
            );
        },[date.year,date.month])
    useEffect(
        () => {

            host.get("/color").then((res) => dispatch(setColors(
                res.data
            )));

        },
        [state.color.color]
    );
    const setCurrentColor = (e, id) => {

        e.preventDefault();
        host.get(`/color/${id}`).then((res) => (dispatch(setColor(
            
            res.data
        )), dispatch(closeColor(
            
            false
        ))));

    };
    return <div className={table.lnb} onClick={()=>{tabs.create?dispatch(closeCreate(false)):null}} style={bars.leftBarOpen ? null : { display: 'none' }}>
        <button className={table.lnbBtn} onClick={()=>{
            return tabs.create?dispatch(closeCreate(false)):dispatch(closeCreate(true))}}>Create</button>
        {tabs.create?<div className={table.lnbEvents} >
            <Link href={'/events'}><div onClick={()=>{
                return dispatch(closeCreate(false))}} className={table.lnbEvent}>Events</div></Link>
            <div onClick={()=>{
                return dispatch(closeCreate(false))
            }} className={table.lnbEvent}>Tasks</div>
            </div>:null}
        <div className={table.lmbTitle}>{moment(`${date.year}${date.month}`).format('MMMM')} {date.year}</div>
        <div className={table.lnbLeftBtn} onClick={()=>{
            return setDate({
                year:date.month==='01'?date.year-1:date.year,
                month:date.month==='01'?'12':`${(+date.month-1)>9?(+date.month-1):'0'+(+date.month-1)}`
            })
        }}><ChevronLeftOutlinedIcon/></div>
        <div className={table.lnbRightBtn} onClick={()=>{
            return setDate({
                year:date.month==='12'?date.year+1:date.year,
                month:date.month==='12'?'01':`${(+date.month+1)>9?(+date.month+1):'0'+(+date.month+1)}`
            })
        }}><ChevronRightOutlinedIcon/></div>
        <div className={table.leftBarMonth}>
            <div className={table.smallWeekDays}>{weekdaysMin().map((day)=>{
                return <div key={Math.random()} className={table.smallWeekDay}>{day}</div>
            })}</div>
            {days.map(({ dayNumber, id,monthNumber,monthId }) => {
                let current = moment(`${id}`).format('YYYYMMDD')===moment().format('YYYYMMDD')
                return <Link key={id} href={`/${'day'}/${state.year}/${monthId}/${dayNumber}`}>
                <div onClick={() => {
                    return dispatch(setDay( dayNumber)), dispatch(setMonth(+monthId)),dispatch(setYear(date.year)), dispatch(setMode( 'day'))
                }} style={monthNumber!==date.month&&!current?
            {color:'rgb(168, 168, 179)'}:null} className={current?table.leftBarMonthCurrentDay:table.leftBarMonthDays}>
                {dayNumber}
                </div></Link>
            })}
        </div>
            <div className={table.mycalendar}>
                <div className={table.myCalendarSettings} onClick={()=>{
                    return tabs.color?dispatch(closeColor(false)):dispatch(closeColor(true))}
                    }>
                    <div className={table.calendarColor} style={{backgroundColor:state.color.color}}></div>
                    <div className={table.myCalendarTitle}>My Calendar</div>
                    <BiDotsVerticalRounded className={table.dots}/>
                    </div>
                    </div>
            {tabs.color?<div className={table.palette}>{state.colors.map(({color,id},i)=>{
                return <div key={i} className={table.colors} onClick={(e)=>setCurrentColor(e,id)} style={{backgroundColor:color}}>{state.color.color===color?<AiOutlineCheck style={{margin:'3px 2px',color:'white'}}/>:''}</div>
            })}</div>:null}
    </div>

};
