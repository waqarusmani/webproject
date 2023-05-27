import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        add: (state, action) =>  state += 1,
        sub: (state, action) => state -= 1 ,
        reset: (state, action) =>  state = 0 ,
    }
})


export const { add, sub, reset } = countSlice.actions

export default countSlice.reducer
