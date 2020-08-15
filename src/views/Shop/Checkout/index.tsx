// React
import React, { FC } from "react";
// Custom Components
import CheckoutItem from "components/Checkout/Item";
import StripeButton from "components/_shared/StripeButton"
// Redux
import cartItems from "utils/shop.data"
// import request from "state//actions";
// import { selectors } from "state//selectors";
// Styles
import "./styles.scss"

const Checkout: FC = () => {
  const total = "...loading";

  return (
    <div className="cart-view">
      <div className="cart-view__header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem, i) => (
        <CheckoutItem
          key={i}
          cartItem={cartItem.items}
        // clearItem={() => {/**dispatch clear item */ }}
        // addItem={() => {/**dispatch add item */ }}
        // removeItem={() => {/**dispatch remove item */ }}
        />
      ))}
      <span className="cart-view__total-price">TOTAL: ${total}</span >
      <span className="cart-view__alert">
        *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </span>
      <StripeButton />
    </div>
  )
}

export default Checkout;
