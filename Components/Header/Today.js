import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {getLocaleDate} from "../../store/reducer/sampleReducer";
import header from "./Header.module.css";
import React from "react";
function Today () {

    const dispatch = useDispatch(),
        state = useSelector((state) => state.sampleData);
    return (
        <Link href={`/${state.mode}`}>
            <button
                className={header.btn}
                onClick={() => dispatch(getLocaleDate())}
            >
                Today
            </button>
        </Link>
    );

}
export default Today;
