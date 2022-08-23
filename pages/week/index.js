import { useSelector } from "react-redux"
import styles from '../../styles/Home.module.css'


export default function Week() {
    const state = useSelector(state=>state)
    debugger
  return (
    <div className={styles.container} style={state.openBar.leftBarOpen?null:{width:'1225px',marginLeft:'10px'}}>
        {state.sampleData.count.week.days.map(day=>{
            return <div className={styles.weekDay} style={state.openBar.leftBarOpen?{width:'150px'}:null}>
                {state.sampleData.count.week.dayHours.map(hour=>{
                    return <div className={styles.dayHours}>{hour}</div>
                })}</div>
        })}
    </div>
  )
}