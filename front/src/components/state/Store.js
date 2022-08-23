import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../features/BookSlice";
import GivenBookReducer from "../features/GivenBookSlice";
import PersonReducer from "../features/PersonSlice";

export const store = configureStore({
    reducer:{
        book:BookReducer,
        givenbook:GivenBookReducer,
        person:PersonReducer
    }
})