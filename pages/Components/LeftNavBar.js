import { useSelector } from 'react-redux'
import table from './Table.module.css'

function LeftNavBar(){
    const state = useSelector(state=>state.openBar.leftBarOpen)
    return <div className={table.lnb} style={state?null:{display:'none'}}>
        ok
    </div>
}
export default LeftNavBar