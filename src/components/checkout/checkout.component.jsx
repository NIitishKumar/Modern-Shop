import React, { useContext } from "react";
import { AddToCartContext } from "../../contexts/add-to-cart.context";
import CheckoutItem from "../checkout-item/checkout-item";
import "./checkout.style.scss";

function Checkout() {
  const { items, incrementItemCount, totalPrice, removeItemCheckout } =
    useContext(AddToCartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {items.map((res, i) => {
        return <CheckoutItem cartItem={res} />;
      })}
      <div className="total">TOTAL: ${totalPrice}</div>
    </div>
  );
}

export default Checkout;
