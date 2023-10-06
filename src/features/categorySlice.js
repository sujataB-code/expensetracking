import { createSlice } from "@reduxjs/toolkit";
import { categoryList } from "../data/categoryList";


const CategorySlice = createSlice({
    name: 'CategoryList',
    initialState: categoryList,
    reducers: {
        addCategory(state, action) {
            state.push(action.payload)
        },
        removeCategory(state, action) {
            const { id } = action.payload;
            const uu = state.find((category) => category.id == id);
            if (uu) {
                return state.filter((f) => f.id !== id);
            }
        },
    }
});

export const { addCategory,removeCategory } = CategorySlice.actions
export default CategorySlice.reducer;