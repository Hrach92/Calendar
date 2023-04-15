import table from "./Table.module.css";
import {IoCloseSharp} from "react-icons/io5";
import React, {memo, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEvent, setNotesOpen} from "../store/reducer/sampleReducer";
import {dayList, host, setEvents, useInput} from "./Instance";
import SelectHour from "./SelectionOfHours/Hours";
import RightSelection from "./SelectionOfHours/RightSelection";
import {IoTimeOutline} from "react-icons/io5";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import moment from "moment";
import {PropTypes} from "prop-types";
import SmallCalendar from "./SmallCalendar/SmallCalendar";

function MyNotes (props) {

    const {date} = props,
        state = useSelector((state) => state.sampleData),
        dispatch = useDispatch(),
        [
            hourModeDis,
            setHourModeDis
        ] = useState(false),
        [
            dateRange,
            setDateRange
        ] = useState(false),
        [
            dates,
            setDates
        ] = useState({
            "year": date.year,
            "month": date.monthNumber,
            "monthShortName": "",
            "day": date.dayNumber,
            "dayName": ""
        }),
        input = useInput(''),
        days = useMemo(()=>{
            return dayList(
                dates.year,
                dates.month
            )
        },[dates.year,dates.month]);
        const postEvents = (e,post) =>{
            e.preventDefault();
            host.post('event',{...setEvents(post)}).then(r=>{
                console.log(res)
            })
            return setHourModeDis(false), dispatch(setNotesOpen( false)), setDateRange(false)
        }
    return <div className={table.notes} style={state.openNotes ? null : { display: 'none' }}>
        <div className={table.closeBtn} onClick={() => {
            return dispatch(setNotesOpen( false)), setHourModeDis(false), setDateRange(false)
        }}><IoCloseSharp /></div>
        <input type={'text'} {...input} className={table.noteInput} placeholder={'Add Title and Time'} />
        <IoTimeOutline className={table.hourIcon} />
        <div className={table.eventDay}><span>{date.nameOfDay},{date.month} {date.dayNumber}</span> <span style={{ cursor: 'pointer' }} onClick={() => {
            return dateRange ? setDateRange(false) : setDateRange(true)
        }}>- {dates.dayName ? dates.dayName : date.nameOfDay},{dates.monthShortName ? dates.monthShortName : date.month} {dates.day ? dates.day : date.dayNumber}</span> </div>
        {hourModeDis ?
         null : 
         <div className={table.hourSelect}>
            <div><SelectHour /></div>-<div><RightSelection /></div></div>}
        <div className={table.check}><input type={'checkbox'} onChange={(e) => {
            return setHourModeDis(e.target.checked), setDateRange(false)
        }} />All day</div>
        <div className={table.closeEvent}><button className={table.cancel} onClick={() => {
            return dispatch(setNotesOpen( false)), setHourModeDis(false), setDateRange(false)
        }}>cancel</button><button onClick={(e) => {
            return (hourModeDis ? postEvents(e, {
                eventstart:0,
                end_time:'',
                start_time:'',
                time:0,
                hour_mode:false,
                title: (input.value ? input.value : 'No title'), 
                date_id: date.id,
                year: date.year, 
                month: date.month,
                date_range: moment(`${dates.year}${dates.month}${dates.day > 9 ? dates.day : '0' + dates.day}`).diff(moment(date.id), 'days') + 1 }) :
                postEvents(e, {
                     hour_mode:true,
                     title: input.value ? input.value : 'No title',
                     date_id: date.id, 
                     year: date.year, 
                     month: date.month,
                     eventstart: Math.min(state.time.rightId,state.time.leftId)?Math.min(state.time.rightId,state.time.leftId):9,
                     time: state.time.hour?state.time.hour:9,
                     start_time:state.time.left?`${state.time.left}${state.time.leftFormat}`:'9AM',
                     end_time:state.time.right?`${state.time.right}${state.time.rightFormat}`:'6PM',
                     date_range:1, 
                    data:{}}))
        }} className={table.save}>save</button></div>
        {dateRange ?
            <div className={table.smallCalendar}>
                <SmallCalendar/>
            </div> : null}
    </div>

}
MyNotes.propTypes = {
    "date": PropTypes.object
};
MyNotes.defaultProps = {
    "date": {}
};
export default memo(MyNotes);
