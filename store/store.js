import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducer'
import { configureStore } from "@reduxjs/toolkit";
import { TabSlice } from "./reducer/tabReducer";
import { BarReducer } from "./reducer/menuReducer";
import { Features } from "./reducer/sampleReducer";

const initialState = {}
const middleware = [thunk]

export const store = configureStore({
    reducer:{
        sampleData:Features.reducer,
        openBar:BarReducer.reducer,
        tabs:TabSlice.reducer
    }
}
)

/* const makeStore = () => store
export const wrapper = createWrapper(makeStore) */