import moment, {weekdaysShort} from "moment";
import {useSelector} from "react-redux";
import week from "../../Week.module.css";
import React, { useMemo } from "react";
import { weekDays } from "../../../../Components/Instance";


export default function Week () {

    const state = useSelector((state) => state),

        /*   Let newId = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day>9?state.sampleData.day:'0'+state.sampleData.day}`).format('YYYYMMDD') */
        weekDay = useMemo(()=>{
            return weekDays(
                state.sampleData.year,
                state.sampleData.month.monthNumber,
                state.sampleData.day
            );
        },[state.sampleData.year,state.sampleData.month.monthNumber,state.sampleData.day])
    return (
        <div
            className={week.container}
            style={state.openBar.leftBarOpen
                ? null
                : {"width": "1225px",
                    "marginLeft": "10px"}}
        >
            <div
                className={week.dayNames}
                style={state.openBar.leftBarOpen
                    ? {"left": "325px"}
                    : null}
            >
                {weekdaysShort().map((weekday, i) => {

                    const day = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day > 9
                            ? state.sampleData.day
                            : `0${state.sampleData.day}`}`).startOf("week").
                            add(
                                i,
                                "day"
                            ).
                            date(),
                        number = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${day > 9
                            ? day
                            : `0${day}`}`).format("YYYYMMDD");
                    return (<div key={Math.random()}>
        <div style={state.openBar.leftBarOpen ? { width: '130px'} : null} className={week.weekDay}>{weekday}
        </div>
        <div className={week.dayNumberContainer} style={state.openBar.leftBarOpen ? { width: '130px'} : null} >
          <div className={week.dayNumber} style={state.openBar.leftBarOpen ? (number===moment().format('YYYYMMDD')?{ marginLeft: '45px',backgroundColor:'blue',color:'white'}:{ marginLeft: '45px'}) : (number===moment().format('YYYYMMDD')?{backgroundColor:'blue',color:'white'}:null)}>
            {day}</div>
            </div>
        </div>)

                })}
            </div>

            <div
                className={week.dayContainer}
                style={{"position": "relative",
                    "marginTop": "40px",
                    "left": "20px",
                    "display": "flex",
                    "flexWrap": "wrap"}}
            >
                {weekDay.map(({hour, format, day, id}) => <div key={id}>
          {hour===moment().format('h')&&format===moment().format('A')&&day===moment().format('YYYYMMDD')?
        <div title={moment().format('hh:mm')} style={{position:'absolute',marginTop:`${parseInt(48/60*moment().format('mm'))}px`,height:'1px',width:`${state.openBar.leftBarOpen?130:163}px`,border:'1px solid red'}}></div>:null}
        <div style={state.openBar.leftBarOpen?((id%8==0)?{width:'50px'}:{width:'130px'}):((id%8==0)?{width:'50px'}:null)} className={week.hour}>{id%8===0?`${id===0?'GMT+04':hour}${id===0?'':format}`:null}
      </div>
    </div>)}
            </div>
        </div>
    );

}
