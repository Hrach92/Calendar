import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {addEvents, setNotesOpen} from "../../store/reducer/sampleReducer";
import day_style from "./Day.module.css";
import {dayList, host} from "../../Components/Instance";
import React, {useEffect, useMemo, useState} from "react";
import MyNotes from "../../Components/MyNotes";
import {descriptionOpen} from "../../store/reducer/tabReducer";
import ChangeEvent from "../../Components/ChangeEvent";
export default function Day () {
    const state = useSelector((state) => state.sampleData),
        tabs = useSelector((state) => state.tabs),
        bars = useSelector((state) => state.openBar),
        events = useSelector((state) =>state.sampleData.events),
        dispatch = useDispatch(),
        [
            description,
            setDescription
        ] = useState({}),
        newId = moment(`${state.year}${state.month.monthNumber}${state.day > 9
            ? state.day
            : `0${state.day}`}`).format("YYYYMMDD"),
        currentDay = moment(newId).format('YYYYMMDD') === moment().format('YYYYMMDD'),
        days = useMemo(()=>{
            return dayList(
                state.year,
                state.month.monthNumber
            )
        },[state.year,state.month.monthNumber])
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
    return (
        <div
            className={bars.leftBarOpen?day_style.containerWithOpenbar:day_style.container}
        >
            <div className={day_style.eventlist}>
                {events.dayEvents.length !== 0
                    ? events.dayEvents.filter(({date_id}) => date_id === newId).map((i) => <div key={Math.random()} onClick={() => {
          tabs.description ? (setDescription({}), dispatch(descriptionOpen( false))) : (setDescription(i), dispatch(descriptionOpen( true)))
        }} className={day_style.events} style={{ backgroundColor: state.color.color }}>{i.title}</div>)
                    : null}
            </div>

            {state.openNotes
                ? <MyNotes date={days.find((v) => v.id === newId)} />
                : null}

            <div className={day_style.rightLine}/>
                <div className={day_style.dayContainer}>
                    <div className={day_style.eventContainer}>
                    {events.hourEvents.length !== 0
                        ? events.hourEvents.filter(({date_id}) => date_id === newId).map((i) => (<div onClick={() => {
              return tabs.description ? (setDescription({}), dispatch(descriptionOpen( false))) : (setDescription(i), dispatch(descriptionOpen( true)))
            }} key={Math.random()} className={day_style.hourEvents} style={{ backgroundColor: state.color.color, marginTop: `${i.eventstart * 48}px`, height: `${48 * i.time}px` }}>
              <div className={day_style.eventTime}>{i.start_time} - {i.end_time}</div>
              <div className={day_style.eventDescription} style={{  height: `${i.time * 48 - 35}px`}}>{i.title}</div>
            </div>))
                        : null}
                </div>

                {state.hoursOfDay.map(({hour, format, id}) => (<div className={day_style.dayRow} key={id} onClick={() => {
            return dispatch(setNotesOpen( true))
          }}>
            <div className={day_style.hour} >{id === 0 ? 'GMT+04' : `${hour}${format}`}</div>
            <div className={bars.leftBarOpen?day_style.hourNotesWithBarOpen:day_style.hourNotes}>
              {`${hour}` === moment().format('h') && format === moment().format('A') && currentDay?
                <div className={day_style.redLine} style={{ width: `${bars.leftBarOpen ? 900 : 1135}px`, marginTop: `${parseInt(48 / 60 * moment().format('mm'))}px` }}></div> : null}</div>
          </div>))}
            </div>

            <div
                className={bars.leftBarOpen?day_style.currentWithBarOpen:day_style.current}
                style={bars.leftBarOpen
                    ? currentDay
                        ? {
                            "backgroundColor": "blue",
                          }
                        : null
                    : currentDay
                        ? {
                            "backgroundColor": "blue"}
                        : null}
            >
                <div className={day_style.dayName}>
                    {moment(newId).format("ddd")}
                </div>

                <div>
                    {state.day}
                </div>
            </div>

            {tabs.description
                ? <ChangeEvent
                    description={description}
                />
                : null}
        </div>
    );

}
