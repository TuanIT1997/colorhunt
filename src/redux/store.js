import { configureStore } from "@reduxjs/toolkit";
import colorhuntReducer from "./colorSlide";
export const store = configureStore({
    reducer: {
        colorhunt: colorhuntReducer,
    },
})