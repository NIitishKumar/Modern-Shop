import React, { useContext } from 'react'
import "./cart-icon.scss"
import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg"
import { CartContext } from '../../contexts/cart.context'
import { AddToCartContext } from '../../contexts/add-to-cart.context'
import { useDispatch, useSelector } from 'react-redux'
import { isCartOpenSelector, totalItemsInCart } from '../../store/cart/cart.selector'
import { CART_ACTION_TYPES } from '../../store/cart/cart.types'
import { setCartToggle } from '../../store/cart/cart.action'

function CartIcon() {

  const {items} = useContext(AddToCartContext);

  const dispatch = useDispatch();
  const cartOpenValue = useSelector(isCartOpenSelector);
  const totalItems = useSelector(totalItemsInCart);
  console.log(cartOpenValue)

  const toggleIsCartOpen = () => {
    dispatch(setCartToggle(!cartOpenValue));
  }
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingBagIcon className="shoping-icon" />
        <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default CartIcon