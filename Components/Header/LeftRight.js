import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setDay, setMonth, setYear} from "../../store/reducer/sampleReducer";
import header from "./Header.module.css";
import { SampleData } from "../../store/reducer/sampleReducer";
function LeftNRight () {

    const state = useSelector(SampleData),
        dispatch = useDispatch();
    if (state.mode === "month") {

        return <div className={header.leftRight}>
            <Link href={`/${state.mode}/${state.month.id === 1 ? state.year - 1 : state.year}/${state.month.id === 1 ? 12 : state.month.id - 1}`}><div onClick={() => {
                if (state.month.id === 1) {
                    return dispatch(setMonth( 12)), dispatch(setYear( state.year - 1))
                }
                else if(state.month.id===3&&state.day>28){
                    return dispatch(setDay(new Date(state.year,state.month.id-1,0).getDate())),dispatch(setMonth(state.month.id-1))
                }
                else { return dispatch(setMonth((state.month.id - 1))) }
            }} className={header.leftRightBtn}><ChevronLeftOutlinedIcon /></div></Link>
            <Link href={`/${state.mode}/${state.month.id === 12 ? state.year + 1 : state.year}/${state.month.id === 12 ? 1 : state.month.id + 1}`}><div onClick={() => {
                if (state.month.id === 12) {
                    return dispatch(setMonth( 1)), dispatch(setYear( state.year + 1))
                }
                else if(state.month.id===1&&state.day>28){
                    return dispatch(setDay(new Date(state.year,state.month.id+1,0).getDate())),dispatch(setMonth(state.month.id+1))
                }
                else { return dispatch(setMonth( state.month.id + 1)) }
            }} className={header.leftRightBtn}><ChevronRightOutlinedIcon /></div></Link>
        </div>

    } else if (state.mode === "year") {

        return <div className={header.leftRight}>
            <Link href={`/${state.mode}/${state.year - 1}/${state.month.id}`}>
                <div onClick={() => {
                    return dispatch(setYear( state.year - 1))
                }} className={header.leftRightBtn}>
                    <ChevronLeftOutlinedIcon /></div></Link>
            <Link href={`/${state.mode}/${state.year + 1}/${state.month.id}`}>
                <div onClick={() => {
                    return dispatch(setYear( state.year + 1))
                }} className={header.leftRightBtn}>
                    <ChevronRightOutlinedIcon />
                </div></Link>
        </div>

    } else if (state.mode === "day") {

        return <div className={header.leftRight}>
            <Link href={`/${state.mode}/${new Date(state.year, state.month.id - 1, state.day - 1).getMonth() === 11 && new Date(state.year, state.month.id - 1, state.day).getDate() === 1 ? state.year - 1 : state.year}/${state.day === 1 ? (state.month.id === 1 ? 12 : state.month.id - 1) : state.month.id}/${state.day === 1 ? new Date(state.year, state.month.id - 1, 0).getDate() : state.day - 1}`}>
                <div onClick={() => {
                    if (new Date(state.year, state.month.id - 1, state.day - 1).getMonth() === 11 && new Date(state.year, state.month.id - 1, state.day).getDate() === 1) {
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, 0).getDate())), dispatch(setMonth( 12)), dispatch(setYear( state.year - 1))
                    }
                    else if (state.day === 1) {
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, 0).getDate())), dispatch(setMonth( state.month.id - 1))
                    }
                    else { return dispatch(setDay( state.day - 1)) }
                }} className={header.leftRightBtn}>
                    <ChevronLeftOutlinedIcon /></div></Link>
            <Link href={`/${state.mode}/${new Date(state.year, state.month.id - 1, state.day + 1).getMonth() === 0 && new Date(state.year, state.month.id - 1, state.day + 1).getDate() === 1 ? state.year + 1 : state.year}/${new Date(state.year, state.month.id - 1, state.day + 1).getDate() === 1 ? (state.month.id === 12 ? 1 : state.month.id + 1) : state.month.id}/${new Date(state.year, state.month.id - 1, state.day + 1).getDate() === 1 ? 1 : state.day + 1}`}>
                <div onClick={() => {
                    if (new Date(state.year, state.month.id - 1, state.day + 1).getMonth() === 0 && new Date(state.year, state.month.id - 1, state.day + 1).getDate() === 1) {
                        return dispatch(setDay( 1)), dispatch(setMonth( 1)), dispatch(setYear( state.year + 1))
                    }
                    else if (new Date(state.year, state.month.id - 1, state.day + 1).getDate() === 1) {
                        return dispatch(setDay( 1)), dispatch(setMonth( state.month.id + 1))
                    }
                    return dispatch(setDay( state.day + 1))
                }} className={header.leftRightBtn}>
                    <ChevronRightOutlinedIcon />
                </div></Link>
        </div>

    } else if (state.mode === "week") {

        return <div className={header.leftRight}>
            <Link href={`/${state.mode}/${state.month.id===1&&new Date(state.year,state.month.id-1,state.day-7).getDate()>24?state.year-1:state.year}/${new Date(state.year, state.month.id - 1, state.day - 7).getDate()>=24 ? (state.month.id===1&&state.day-7<=0?12:state.month.id-1) : state.month.id}/${new Date(state.year, state.month.id - 1, state.day - 7).getDate() >=24 ? new Date(state.year, state.month.id - 1, state.day - 7).getDate() : state.day - 7}`}>
                <div onClick={() => {
                    if(new Date(state.year, state.month.id - 1, state.day).getDate()<=7&&state.month.id===1){
                        return dispatch(setMonth(12)),dispatch(setDay(new Date(state.year, state.month.id - 1, state.day-7).getDate())),dispatch(setYear(state.year-1))
                    }
                    else if (new Date(state.year, state.month.id - 1, state.day - 7).getDate()>21) {
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, state.day -7).getDate())), dispatch(setMonth( state.month.id -1))
                    }
                    else if (new Date(state.year, state.month.id - 1, state.day - 7).getDate()>24) {
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, state.day -7).getDate())), dispatch(setMonth( state.month.id -1))
                    }
                    return dispatch(setDay( state.day - 7))
                }} className={header.leftRightBtn}>
                    <ChevronLeftOutlinedIcon /></div></Link>
            <Link href={`/${state.mode}/${new Date(state.year,state.month.id-1,state.day).getDate()>24&&state.month.id===12?state.year+1:state.year}/${new Date(state.year, state.month.id - 1, state.day + 7).getDate() <= 7 ?(state.month.id===12?1:state.month.id+1) : state.month.id}/${new Date(state.year, state.month.id - 1, state.day + 7).getDate() <= 7 ? new Date(state.year, state.month.id - 1, state.day + 7).getDate() : state.day + 7}`}>
                <div onClick={() => {
                    if(new Date(state.year, state.month.id - 1, state.day).getDate()>24&&state.month.id===12){
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, state.day + 7).getDate())),dispatch(setMonth(1)),dispatch(setYear(state.year+1))
                    }
                    else if (new Date(state.year, state.month.id - 1, state.day + 7).getDate() <= 7) {
                        return dispatch(setDay( new Date(state.year, state.month.id - 1, state.day + 7).getDate())), dispatch(setMonth( state.month.id + 1))
                    }
                    return dispatch(setDay( state.day + 7))
                }} className={header.leftRightBtn}>
                    <ChevronRightOutlinedIcon />
                </div></Link>
        </div>

    }

}
export default LeftNRight;
