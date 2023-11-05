import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

const rootReducers = combineReducers({
  sampleData: sampleReducer,
});
export default rootReducers;
