import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import sampleReducer from "./sampleReducer";
import TabReducer from "./tabReducer";

const rootReducers = combineReducers({
  sampleData: sampleReducer,
  openBar: menuReducer,
  tabs: TabReducer,
});
export default rootReducers;
