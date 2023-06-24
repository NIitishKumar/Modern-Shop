import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AddToCartContext } from '../../contexts/add-to-cart.context'
import StyledButton from '../button/button.component'
import CartItem from '../cart-item/cart-item'
import FormButton from '../form-button/button.component'
import "./cart-dropdown.scss"
import { useSelector } from 'react-redux'
import { cartItems } from '../../store/cart/cart.selector'

function CartDropdown() {

  // const {items} = useContext(AddToCartContext)
  const items = useSelector(cartItems);
  console.log(items);

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {
            items.length ?
            items.map((res,i) => {
              const {name, count} = res
              return (
                <CartItem cartItem={res} />
              )
            }) :<p>Your Cart is Empty</p>
          }
        </div>
        <NavLink to={"/checkout"}>
            <StyledButton>Go to Checkout</StyledButton>
        </NavLink>
    </div>
  )
}

export default CartDropdown