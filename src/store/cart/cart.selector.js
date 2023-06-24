import {createSelector} from "reselect";

const selectCartReducer = state => state.cart;

export const isCartOpenSelector = createSelector( [selectCartReducer],state => state.isCartOpen);
export const cartItems = createSelector([selectCartReducer], state => state.cartItems);
export const totalItemsInCart = createSelector([selectCartReducer], state => state.totalItemsInCart);
export const totolPrice = (createSelector([selectCartReducer], state => {
    return state.cartItems?.reduce((total, res) => total + res.count * res.price , 0)
}));