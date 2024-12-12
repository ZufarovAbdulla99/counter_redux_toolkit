import { configureStore } from "@reduxjs/toolkit";
import countreSlice from "./counterSlice"

export default configureStore({
    reducer: {
        counter: countreSlice
    }
})