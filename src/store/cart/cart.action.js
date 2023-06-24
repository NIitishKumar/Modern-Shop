import { createAction } from "../../utils/reducer";
import { CART_ACTION_TYPES } from "./cart.types";

export const addToCartAction = (items, item) => {
    let exist = items?.find(res => res.id === item.id)
    if (exist) {
        let temp = items.map(res => {
            return res.id === item.id ? {...res, count : res.count + 1} : res
        })
        return createAction(CART_ACTION_TYPES.ADD_TO_CART, temp);        
    }else{
        return createAction(CART_ACTION_TYPES.ADD_TO_CART, [...items, {...item, count : 1}])
    }
}

export const removeItem = (items, id) => {
    let temp = items?.map(res => res.id != id);
    return temp;
}

export const incrementItemCount = (items, id) => {
    let temp = items.map(res => {
        return id === res.id ? {...res, count :res.count +1} : res
    })
    return createAction(CART_ACTION_TYPES.INCREMENT_ITEM_COUNT, temp);
}

export const decrementItemCount = (items, id) => {
    let temp = items.map(res => {
        return id === res.id && res.count ? {...res, count :res.count - 1} : res
    })
    return createAction(CART_ACTION_TYPES.DECREMENT_ITEM_COUNT, temp);;
}

export const removeItemCheckout = (items, id) => {
    let temp = items?.filter(res => res.id !== id)
    return (createAction(CART_ACTION_TYPES.REMOVE_FROM_CART, temp));
    // setItems(temp)
}

export const countCartItems = (items) => {
    let count = items?.reduce((c, item) => c + item.count, 0) 
    return createAction(CART_ACTION_TYPES.TOTOAL_ITEMS_IN_CART, count)
}

export const setCartToggle = (val) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, val)
}