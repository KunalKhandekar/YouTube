import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name : 'state',
    initialState : {
        showSideBar : false
    },
    reducers : {
        toggleSideBar : (state) => {
            state.showSideBar = !state.showSideBar;
        },
        openSideBar : (state) => {
            state.showSideBar  =  true
        }
    }
});

export const { toggleSideBar, openSideBar } = stateSlice.actions;
export default stateSlice.reducer;