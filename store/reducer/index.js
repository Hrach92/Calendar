import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import sampleReducer from './sampleReducer'

export default combineReducers({
    sampleData:sampleReducer,
    openBar:menuReducer
})