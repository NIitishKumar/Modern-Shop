import React, { useContext } from 'react'
import "./cart-icon.scss"
import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg"
import { CartContext } from '../../contexts/cart.context'
import { AddToCartContext } from '../../contexts/add-to-cart.context'

function CartIcon() {

  const {isCartOpen, setIsCartOpen} = useContext(CartContext)
  const {items, totalItems} = useContext(AddToCartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingBagIcon className="shoping-icon" />
        <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default CartIcon