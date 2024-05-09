import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name : 'state',
    initialState : {
        showSideBar : false,
        darkMode : true,
        activeTopic : 'Home',
        homeTopics : ['Home', 'All', 'TMKOC', 'Motivation', 'Computer Programming', 'Music', 'Cricket', 'Politics', 'Animated Films', 'Movies', 'Study', 'Gaming', 'Sports']
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
        },
        changeActiveTopic : (state, action) => {
            state.activeTopic = action.payload;
        }
    }
});

export const { toggleSideBar, openSideBar, toggleDarkMode, changeActiveTopic } = stateSlice.actions;
export default stateSlice.reducer;