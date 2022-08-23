import { useSelector } from "react-redux"
import styles from '../../styles/Home.module.css'


export default function Year() {
    const state = useSelector(state=>state)
    debugger
  return (
    <div className={styles.container} style={state.openBar.leftBarOpen?null:{width:'1225px',marginLeft:'10px'}}>
        {state.sampleData.count.year.map(year=>{
            return <div className={styles.year} style={state.openBar.leftBarOpen?{width:'262px',height:'262px'}:null}>{year}</div>
        })}
    </div>
  )
}