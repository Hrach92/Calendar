import {useSelector} from "react-redux";
import year from "../../Year.module.css";
import React from "react";
import YearComponent from "../../../../Components/YearComponent";


export default function Year () {

    const bar = useSelector((state) => state.openBar),
    state = useSelector((state)=> state.sampleData)
    return (
        <div
            className={bar.leftBarOpen?year.containerWithBarOpen:year.container}
        >
            {state.months.map(({title, id, monthNumber}) => (<div key={id} className={bar.leftBarOpen?year.yearComponentWithBarOpen:year.yearComponent}>
                    <YearComponent numberOfMonth={monthNumber} title={title}/>
                    </div>))}
        </div>
    );

}
