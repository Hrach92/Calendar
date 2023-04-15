import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import table from "./Table.module.css";
import header from "./Header/Header.module.css";
import {rightMenuBarOpen} from "../store/reducer/menuReducer";
import Image from "next/image";
function RightNavBar () {

    const state = useSelector((state) => state),
        dispatch = useDispatch();
    return <div>
        <div className={table.rnb} style={state.openBar.rightBarOpen ? null : {display:'none'}}>
            {state.sampleData.notes.map(({ img, title, id }) => {
                return <div title={title} key={id} className={table.bar}><Image src={img} height={30} width={30} /></div>
            })}
            <div title='Add' className={table.bar}><Image src={'/button.png'} height={30} width={30} /></div>
        </div>
        <div className={table.open}>{state.openBar.rightBarOpen ? 
          <div className={header.leftRightBtn} onClick={() => { dispatch(rightMenuBarOpen( false)) }}><ChevronRightOutlinedIcon /></div> 
        : <div className={header.leftRightBtn} onClick={() => { dispatch(rightMenuBarOpen( true) )}}><ChevronLeftOutlinedIcon /></div>}
        </div>
    </div>

}
export default RightNavBar;
