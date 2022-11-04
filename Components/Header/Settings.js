import {IoSettingsOutline} from "react-icons/io5";
import React from "react";
import header from "./Header.module.css";

export default function MenuPopupState () {

    return (
        <div className={header.settingsComponent}>
            <IoSettingsOutline className={header.settings}/>
        </div>
    );

}

