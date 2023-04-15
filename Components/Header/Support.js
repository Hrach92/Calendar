import React from "react";
import header from "./Header.module.css";
import {BiHelpCircle} from "react-icons/bi";

function Support () {

    return <div className={header.supportComponent}>
        <BiHelpCircle className={header.support} />
    </div>

}
export default Support;
