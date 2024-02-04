import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './slices/counterSlice'


const STORE = configureStore({

    // NOTE:  reducer is a required arg that  must be a func 
    // or obj of funcs that can be passed to combineReducer
    reducer: {
        CounterReducer,
    }

})
export default STORE