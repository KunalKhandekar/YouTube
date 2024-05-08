import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name : 'state',
    initialState : {
        showSideBar : false,
        darkMode : true
    },
    reducers : {
        toggleSideBar : (state) => {
            state.showSideBar = !state.showSideBar;
        },
        openSideBar : (state) => {
            state.showSideBar  =  true
        },
        toggleDarkMode : (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { toggleSideBar, openSideBar, toggleDarkMode } = stateSlice.actions;
export default stateSlice.reducer;