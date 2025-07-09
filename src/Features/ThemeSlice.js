import { createSlice } from "@reduxjs/toolkit";

const initialThemeSlice = {
    theme : "light",
    isDarkMode : false,
}


const themeSlice = createSlice({
    name : "theme",
    initialState : initialThemeSlice,
    reducers : {
        toggleTheme : (state) => {
            state.isDarkMode = !state.isDarkMode;
            state.theme = state.isDarkMode ? "dark" : "light";
        },
        setTheme : (state, action) => {
            state.theme = action.payload;
            state.isDarkMode = action.payload === "dark";
        }
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;