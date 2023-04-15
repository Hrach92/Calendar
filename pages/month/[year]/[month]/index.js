import Link from "next/link";
import React, { useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEvents, getEventDate, setDay, setMode, setMonth, setNotesOpen} from "../../../../store/reducer/sampleReducer";
import month_style from '../../Month.module.css'

/* Import io from 'socket.io-client' */

/* Const socket = io.connect("http://localhost:3001") */
import moment, {weekdaysShort} from "moment";
import {closeSmall, descriptionOpen} from "../../../../store/reducer/tabReducer";
import MyNotes from "../../../../Components/MyNotes";
import ChangeEvent from "../../../../Components/ChangeEvent";
import { dayList,host } from "../../../../Components/Instance";
function Month() {
    const state = useSelector((state) => state.sampleData)
    const tabs = useSelector((state) => state.tabs)
    const bar = useSelector((state) => state.openBar)
    const events = useSelector((state) =>state.sampleData.events),
        [
            description,
            setDescription
        ] = useState({}),
        dispatch = useDispatch(),
        [
            dayDate,
            setDayDate
        ] = useState(null);
    useEffect(
        () => {
          host.get('event').then(res =>{
            dispatch(addEvents(res.data))
          })
        },
        [
            state.openNotes,
            tabs.description
        ]
    );
    const days = useMemo(()=>{
    return dayList(state.year,state.month.monthNumber)},[state.year,state.month.monthNumber])
    return (
        <div
            className={bar.leftBarOpen?month_style.container:month_style.containerWithOpenBar}
            onClick={() => dispatch(closeSmall(
                false
            ))}
        >
            <div className={month_style.leftLine} />

            {state.openNotes && dayDate
                ? <MyNotes date={dayDate} />
                : null}

            <div className={month_style.weekdays}>
                {weekdaysShort().map((weekday) => (<div key={Math.random()}
className={bar.leftBarOpen?month_style.weekdayWithBaropen:month_style.weekday}>
{weekday}
</div>))}
            </div>

            {days.map(({dayNumber, id, month, monthNumber, monthId, nameOfDay, year}) => {
                let current = moment(`${id}`).format('YYYYMMDD') === moment().format('YYYYMMDD')
            return <div key={id}>
          {events.dayEvents.length > 0 ? events.dayEvents.filter(v => v.date_id === id).length === 0 ? null :
            (<div onClick={() => dispatch(setNotesOpen( false))} className={month_style.dayEvents}>
              {events.dayEvents.filter(v => v.date_id === id).map(v => {
                return <div onClick={()=>{
                  return tabs.description?(setDescription({}),dispatch(descriptionOpen(false))):(setDescription(v),dispatch(descriptionOpen(true)))
                }} key={Math.random()} className={month_style.dayEvent} style={v.eventDayStart?{borderRadius:`${v.date_range===1?'6px':'6px 0 0 6px'}`,backgroundColor:state.color.color,width:`${bar.leftBarOpen?139:175}px`}
                :(v.eventDayEnd?{borderRadius:'0 6px 6px 0',width:'135px',backgroundColor:state.color.color}:{backgroundColor:state.color.color,width:`${bar.leftBarOpen?139:175}px`})}>
                  {v.title}</div>
              })}</div>) : null}
                      {events.hourEvents.find(v=>v.date_id===id)!==undefined?<div className={month_style.hourEventList}>
                        {events.hourEvents.filter(({date_id})=>date_id===id).map(i=>{
            return <div className={month_style.hourEvents} style={{backgroundColor:state.color.color}} onClick={()=>{
              return tabs.description?(setDescription({}),dispatch(descriptionOpen(false))):(setDescription(i),dispatch(descriptionOpen(true)))
            }} key={Math.random()}>
              </div>
          })}</div>:null}
          <div><Link href={`/day/${year}/${+monthId}/${dayNumber}`}><div onClick={() => {
            return dispatch(setDay( +dayNumber)), dispatch(setMonth( +monthId)), dispatch(setMode( 'day')),
            dispatch(getEventDate({ dayNumber, id, month, monthNumber, monthId, nameOfDay, year }))
          }} style={bar.leftBarOpen ?
            (monthNumber !== state.month.monthNumber && !current ? { marginLeft: '55px', color: 'rgb(168, 168, 179)' }:{ marginLeft: '55px' })
            : (monthNumber !== state.month.monthNumber && !current ? { color: 'rgb(168, 168, 179)' } :null)}
            className={current ? month_style.currentDay : month_style.number}>
            {dayNumber === 1 ? month
              : null} {dayNumber}
          </div></Link></div>
          <div onClick={() => {
            return state.openNotes ?
              (dispatch(setNotesOpen( false))) :
              dispatch(setNotesOpen( true)),dispatch(descriptionOpen(false)), setDayDate({ dayNumber, id, month, monthNumber, monthId, nameOfDay, year })
          }} style={bar.leftBarOpen ? (days.length === 42 ?
            { height: '96px' } : null) : (days.length === 42 ? { height: '96px' } : null)} className={bar.leftBarOpen?month_style.dayWithOpenBar:month_style.day}>
          </div>
        </div>})}

            {tabs.description
                ? <ChangeEvent
                    description={description}
                  />
                : null}
        </div>

    );

}
export default Month
