import React from "react";
import {CartItemCintainer, ItemDetail, ItemImage, ItemName} from "./cart-item.style.jsx"

function CartItem({ cartItem }) {
  const { name, count, imageUrl, price } = cartItem;
  return (
    <CartItemCintainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetail>
        <ItemName>{name}</ItemName>
        <span className="price">
          {count} X ${price}
        </span>
      </ItemDetail>
    </CartItemCintainer>
  );
}

export default CartItem;
