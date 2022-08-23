import { useSelector } from "react-redux"
import styles from '../../styles/Home.module.css'


export default function Month() {
    const state = useSelector(state=>state)
    debugger
  return (
    <div className={styles.container} style={state.openBar.leftBarOpen?null:{width:'1225px',marginLeft:'10px'}}>
        {state.sampleData.count.month.map(month=>{
            return <div style={state.openBar.leftBarOpen?{width:'150px'}:null} className={styles.day}>{month}</div>
        })}
    </div>
  )
}