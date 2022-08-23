import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import header from './Header.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leftMenuBarOpen } from '../../../store/action/menuBarOpenAction';

function MenuBar(){
    let leftMenu = useSelector(state=>{
        return state.openBar.leftBarOpen
    })
    const dispatch = useDispatch()
    return <div className={header.menu}>
        <MenuOutlinedIcon onClick={()=>{leftMenu?leftMenuBarOpen(dispatch,false):leftMenuBarOpen(dispatch,true)}}/>
    </div>
}
export default MenuBar