import header from "./Header.module.css";
import React from "react";

/* Import { useDispatch, useSelector } from 'react-redux'; */
import {IoIosSearch} from "react-icons/io";


function Search () {


    /*
     *     Const state = useSelector(state=>state.sampleData)
     *     const dispatch = useDispatch()
     */
    return <div className={header.searchComponent}>
<IoIosSearch className={header.search}/>
    </div>

}
export default Search;
