import { LMBOPEN, RMBOPEN } from "../types";

const initialState = {
    rightBarOpen: false,
    leftBarOpen: false
}


const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case LMBOPEN:
            return {
                ...state,
                leftBarOpen: action.left

            }
        case RMBOPEN:
            return {
                ...state,
                rightBarOpen: action.right

            }
        default:
            return state;
    }
}

export default menuReducer