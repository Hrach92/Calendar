import { useDispatch, useSelector } from 'react-redux'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import table from './Table.module.css'
import { rightMenuBarOpen } from '../../store/action/menuBarOpenAction';
function RightNavBar(){
    let rightMenu = useSelector(state=>{
        return state.openBar.rightBarOpen
    })
    const dispatch = useDispatch()
    return <div>
    <div className={table.rnb} style={rightMenu?null:{display:'none'}}>
        <div title='keep' className={table.bar}></div>
        <div title='задачи' className={table.bar}></div>
        <div title='контакты' className={table.bar}></div>
        <div title='карты' className={table.bar}></div>
    </div>
    <div className={table.open}>{rightMenu?<button style={{borderRadius:'50%',border:'0'}} onClick={()=>{rightMenuBarOpen(dispatch,false)}}><ChevronRightOutlinedIcon/></button>:<button style={{borderRadius:'50%',border:'0'}}  onClick={()=>{rightMenuBarOpen(dispatch,true)}}><ChevronLeftOutlinedIcon /></button>}</div>
    </div>
}
export default RightNavBar