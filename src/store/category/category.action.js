import { createAction } from "../../utils/reducer"
import { CATEGORY_ACTION_TYPES } from "./category.types"

export const getCategories = (items) => {
    return createAction(CATEGORY_ACTION_TYPES.GET_CATEGORY, items)
}