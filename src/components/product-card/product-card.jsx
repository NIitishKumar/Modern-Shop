import React, { useContext } from 'react'
import { AddToCartContext } from '../../contexts/add-to-cart.context'
import StyledButton from '../button/button.component'
import FormButton from '../form-button/button.component'
import "./product-card.styles.scss"

function ProductCard({product}) {

    const {items, addItem, removeItem} = useContext(AddToCartContext)

    const  { name, price, imageUrl, id} = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <StyledButton buttonType='inverted' onClick={() => {addItem(product)}}>Add to card</StyledButton>
    </div>
  )
}

export default ProductCard