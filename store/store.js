import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducer'

const initialState = {}
const middleware = [thunk]

export const store = legacy_createStore(
    rootReducer,
    initialState,
)

const makeStore = () => store
export const wrapper = createWrapper(makeStore)