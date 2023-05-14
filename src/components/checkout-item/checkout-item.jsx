import React, { useContext } from "react";
import { AddToCartContext } from "../../contexts/add-to-cart.context";
import "./checkout-item.scss";

function CheckoutItem({ cartItem }) {
  const { removeItemCheckout, incrementItemCount, decrementItemCount } = useContext(AddToCartContext);
  const { id, imageUrl, name, price, count } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-contaier">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => {decrementItemCount(id)}}>&#10094;</div>
        <span className="value">{count}</span>
        <div className="arrow" onClick={() => incrementItemCount(id)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemCheckout(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
