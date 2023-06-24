import { CATEGORY_ACTION_TYPES } from "./category.types";

export const initialValue = {
    categories : []
}

export const categoryReducer = (state = initialValue, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.GET_CATEGORY:
            return {...state, categories : payload};
    
        default:
            return state;
    }

}