import { useSelector } from "react-redux"
import styles from '../../styles/Home.module.css'


export default function Day() {
    const state = useSelector(state=>state)
    debugger
  return (
    <div className={styles.container} style={state.openBar.leftBarOpen?null:{width:'1225px',marginLeft:'10px'}}>
        {state.sampleData.count.day.map(day=>{
            return <div className={styles.hour} style={state.openBar.leftBarOpen?null:{width:'1225px'}}>{day}</div>
        })}
    </div>
  )
}