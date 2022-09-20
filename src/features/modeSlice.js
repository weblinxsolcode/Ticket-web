import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "mode",
    initialState: {
        mode: 0
    },
    reducers: {
        toogle: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const { toogle } = userSlice.actions;

export const selectMode = (state) => state.mode.mode;

export default userSlice.reducer;