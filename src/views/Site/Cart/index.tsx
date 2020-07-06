// React
import React, { FC } from "react";
// Custom Components
import CartItem from "components/Site/Cart/CartItem";
import PayButton from "components/Site/Cart/PayButton"
// Types
import { CartProps } from "./types";
// Styles
import "./styles.scss"


const Cart: FC<CartProps> = ({ cartItems, total = "" }) => {

  return (
    <div className="cart-view">
      <header className="cart-view__header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      {cartItems.map((cartItem, i) => (
        <CartItem key={i} cartItem={cartItem} />
      ))}
      <span className="cart-view__total-price">TOTAL: ${total}</span >
      <span className="cart-view__alert">
        *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </span>
      <PayButton price={total} />
    </div>
  )
}