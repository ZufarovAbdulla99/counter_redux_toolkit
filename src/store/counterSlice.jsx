import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: function(state) {
            state.value += 1
        },
        decrement: function(state) {
            state.value -= 1
        },
        reset: function(state) {
            state.value = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;