import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import header from "./Header.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {leftMenuBarOpen} from "../../store/reducer/menuReducer";

function MenuBar () {

    const bar = useSelector((state) => state.openBar),
        dispatch = useDispatch();
    return <div onClick={()=>{bar.leftBarOpen?dispatch(leftMenuBarOpen(false)):dispatch(leftMenuBarOpen(true))}} className={header.menu}>
        <MenuOutlinedIcon/>
    </div>

}
export default MenuBar;
