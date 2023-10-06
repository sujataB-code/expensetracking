import { configureStore } from "@reduxjs/toolkit";
import ExpenseTrackReducer from "../features/expenseSlice";
import categoryListReducer from "../features/categorySlice";
export const store = configureStore({
    reducer:{
        ExpenseTrack: ExpenseTrackReducer,
        CategoryList: categoryListReducer
    }
})