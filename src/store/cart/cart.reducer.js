import { CART_ACTION_TYPES } from "./cart.types";

const initState = {
    cartItems : [],
    isCartOpen:false,
    totalItemsInCart:0
}

export const cartReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen:payload}

    case CART_ACTION_TYPES.ADD_TO_CART:
        return {...state, cartItems:payload};

    case CART_ACTION_TYPES.TOTOAL_ITEMS_IN_CART:
        return {...state, totalItemsInCart:payload}

    case CART_ACTION_TYPES.INCREMENT_ITEM_COUNT:
        return {...state, cartItems:payload}

    case CART_ACTION_TYPES.DECREMENT_ITEM_COUNT:
        return {...state, cartItems:payload}

        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            return {...state, cartItems:payload}

    default:
        return state;
    }
}