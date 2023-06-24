import React, { useContext, useEffect } from 'react'
import { AddToCartContext } from '../../contexts/add-to-cart.context'
import StyledButton from '../button/button.component'
import "./product-card.styles.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, countCartItems } from '../../store/cart/cart.action'
import { cartItems } from '../../store/cart/cart.selector'

function ProductCard({product}) {

    const dispatch = useDispatch();
    const items = useSelector(cartItems);

    useEffect(() => {
        dispatch(countCartItems(items))
    }, [items])

    const  { name, price, imageUrl, id} = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <StyledButton buttonType='inverted' onClick={() => {dispatch(addToCartAction(items, product))}}>Add to card</StyledButton>
    </div>
  )
}

export default ProductCard