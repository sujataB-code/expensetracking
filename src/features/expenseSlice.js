import { createSlice } from "@reduxjs/toolkit";
import { expensedata } from "../data/expensesData";


const ExpenseTrackingSlice = createSlice({
    name: 'ExpenseTrack',
    initialState: expensedata,
    reducers: {
        addExpense(state, action) {
            state.push(action.payload)
        },
        addCategoryToExpense(state, action) {
            const { expenseId, category } = action.payload;
            const expense = state.find(expense => expense.id === expenseId)
            if (expense) {
                expense.category.push(category)
            }
        },
        removeExpense(state, action) {
            const { id } = action.payload;
            const uu = state.find((expense) => expense.id == id);
            if (uu) {
                return state.filter((f) => f.id !== id);
            }
        },
        updateexpense(state, action) {
            const { id, category, amount, date, description } = action.payload;
            const uu = state.find((expense) => expense.id == id);
            if (uu) {
                uu.category = category;
                uu.amount = amount;
                uu.date = date;
                uu.description = description
            }
        },
    }
});

export const { addExpense,addCategoryToExpense, updateexpense, removeExpense } = ExpenseTrackingSlice.actions
export default ExpenseTrackingSlice.reducer;