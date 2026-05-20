import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Features/ThemeSlice";


const store = configureStore({
    reducer : {
        theme : themeReducer
    }
})

export default store;