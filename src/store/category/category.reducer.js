import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createSlice } from '@reduxjs/toolkit'

export const initialValue = {
    categories : []
}

// export const categorySlice = createSlice({
//     name: "categories",
//     state:initialValue,
//     reducers : {
//         setCategories(state, action){
//             state.categories = action.payload
//         }
//     }
// })

// export const { setCategories } = categorySlice.actions;

// export const categoriesReducer = categorySlice.reducer;

export const categoryReducer = (state = initialValue, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.GET_CATEGORY:
            return {...state, categories : payload};
    
        default:
            return state;
    }

}