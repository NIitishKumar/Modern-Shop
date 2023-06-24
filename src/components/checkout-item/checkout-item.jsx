import React, { useContext } from "react";
import { AddToCartContext } from "../../contexts/add-to-cart.context";
import "./checkout-item.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrementItemCount, incrementItemCount, removeItemCheckout } from "../../store/cart/cart.action";
import { cartItems } from "../../store/cart/cart.selector";

function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const Items = useSelector(cartItems)
  const { id, imageUrl, name, price, count } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-contaier">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => {dispatch(decrementItemCount(Items, id))}}>&#10094;</div>
        <span className="value">{count}</span>
        <div className="arrow" onClick={() => dispatch(incrementItemCount(Items, id))}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(removeItemCheckout(Items,id));
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
