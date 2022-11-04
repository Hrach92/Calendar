/*
 * Import moment from "moment"
 * import { memo, useState } from "react"
 * import { useDispatch, useSelector } from "react-redux"
 * import { addEvents, setEvent } from "../store/action/sampleActions"
 * import styles from '../styles/Home.module.css'
 * import BasicDatePicker from "./Components/DayPicker"
 * import { dayList } from "./Components/Instance"
 *
 * export default memo(function Events(){
 *  const dispatch = useDispatch()
 *  const state = useSelector(state=>state)
 *  const [text,setText] = useState('')
 *  const [leftDate,setLeftDate] = useState({
 *      year:2022,
 *      month:10,
 *      day:21
 *  })
 *  const [rightDate,setRightDate] = useState({
 *      year:'Year',
 *      month:'Month',
 *      day:'Day'
 *  })
 *  return <div style={{position:'absolute',top:'150px'}} className={styles.createEvent}>
 *      <div><input type={'text'} placeholder={'Enter the text...'} onChange={(e)=>setText(e.target.value)} style={{width:'337px'}}/></div>
 *      <input type={'text'} placeholder={'Year'} onChange={(e)=>setLeftDate({...leftDate,year:e.target.value})}/>
 *      <input type={'text'} placeholder={'Month'} onChange={(e)=>setLeftDate({...leftDate,month:e.target.value})}/>
 *      <input type={'text'} placeholder={'Day'} onChange={(e)=>setLeftDate({...leftDate,day:e.target.value})}/> - <input type={'text'} placeholder={'Year'} onChange={(e)=>setRightDate({...rightDate,year:e.target.value})}/>
 *      <input type={'text'} placeholder={'Month'} onChange={(e)=>setRightDate({...rightDate,month:e.target.value})}/>
 *      <input type={'text'} placeholder={'Day'} onChange={(e)=>setRightDate({...rightDate,day:e.target.value})}/>
 *      <button onClick={()=>{
 *          const date = dayList(`${leftDate.year}`,`${leftDate.month>9?leftDate.month:'0'+leftDate.month}`).find(v=>v.id===moment(`${leftDate.year}${leftDate.month>9?leftDate.month:'0'+leftDate.month}${leftDate.day>9?leftDate.day:'0'+leftDate.day}`).format('YYYYMMDD'))
 *          return setEvent(dispatch, { title: (text ? text : 'No title'), date_id: date.id, year: date.year, month: date.month, date_range: moment(`${rightDate.year}${rightDate.month}${rightDate.day > 9 ? rightDate.day : '0' + rightDate.day}`).diff(moment(date.id), 'days') + 1 })
 *      }}>Add</button>
 *  </div>
 * })
 */
