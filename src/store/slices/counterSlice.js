import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    // count: 099  //  NOTE: leadign zero isn't allowed in restrict mode

    // count: '0'
    count: 0
}


const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        // object literal function
        incrementer(state, action) {
            // state.count = ++state.count
            ++state.count
            console.log(state.count)
        },
        decrementer(state, action) {
            // state.count = --state.count
            state.count > 0 ? --state.count : 0;
            // state.count != 0 ? --state.count : 0;
            console.log(state.count)
        }
    }

})


const { actions, reducer } = counterSlice;

export const { incrementer, decrementer } = actions;
export default reducer
