import moment, {weekdaysMin} from "moment";
import React, { useMemo } from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {setDay, setMode, setMonth} from "../store/reducer/sampleReducer";
import {dayList} from "./Instance";
import table from "./Table.module.css";
import PropTypes from 'prop-types'

function YearComponent ({numberOfMonth, title}) {

    const state = useSelector((state) => state.sampleData), /*
    Const tabs = useSelector(state => state.tabs)*/
    bar = useSelector(state => state.openBar),
        dispatch = useDispatch(),
        days = useMemo(()=>{
            return dayList(
                state.year,
                numberOfMonth
            );
        },[state.month,numberOfMonth])
    return <div style={bar.leftBarOpen?{margin:'0'}:null}>
        <div className={table.monthTitle}>{title}</div>
        <div className={table.monthWeekDay}>{weekdaysMin().map((day,i)=>{
            return <div style={{width:'30px'}} key = {i}>{day}</div>
        })}</div>
        <div className={table.monthDaysForYear}>{days.map(({ dayNumber, id,monthId,}) => {
            return <div key={id} style={moment(`${id}`).format('MM') !== numberOfMonth?{color:'grey',margin:`0 ${bar.leftBarOpen?2:3}px`}:{margin:`0 ${bar.leftBarOpen?2:3}px`} } onClick={()=>{
                return dispatch(setDay(dayNumber)),dispatch(setMonth(+monthId)),dispatch(setMode('day'))
            }} className={(state.year===new Date().getFullYear()&&moment(id).format('MM')===`${new Date().getMonth()+1}`&&dayNumber===new Date().getDate())?table.currentDay:table.monthDay}>
                <Link href={`/day/${state.year}/${monthId}/${dayNumber}`}>
                {dayNumber}</Link></div>
        })}</div>
    </div>

}
YearComponent.propTypes = {
    "numberOfMonth": PropTypes.number,
    "title": PropTypes.string
};
export default YearComponent;
// ClassName={(state.year===new Date().getFullYear()&&state.month.id===(new Date().getMonth()+1)&&day===new Date().getDate())?styles.currentDay:styles.number}
