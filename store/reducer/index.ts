import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import TabReducer from "./tabReducer";

const rootReducers = combineReducers({
  sampleData: sampleReducer,
  tabs: TabReducer,
});
export default rootReducers;
