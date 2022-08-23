import { count,month, year } from "../../pages/Components/Instance";
import { SET_MONTH } from "../types";

const initialState = {
    year:{
        years:year,
        setYear:2022
    },
    month:{
        months:month,
        setMonth:{ month: 'August', dayCount: 31, id: 7 }
    },
    count:count
}


const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sampleReducer