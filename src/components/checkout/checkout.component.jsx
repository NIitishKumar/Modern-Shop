import CheckoutItem from "../checkout-item/checkout-item";
import "./checkout.style.scss";
import { useSelector } from "react-redux";
import { cartItems, totolPrice } from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/payment.component";

function Checkout() {
  const items = useSelector(cartItems)
  const finalPrice = useSelector(totolPrice);
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
      <div className="total">TOTAL: ${finalPrice}</div>
      <PaymentForm />
    </div>
  );
}

export default Checkout;
