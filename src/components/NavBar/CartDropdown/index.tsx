// React
import React, { FC } from "react";
// Custom Components
import CartItem from "components/Site/Cart/CartItem";
// Types
import { CartDropdownProps } from "./types";
// Styles
import "./styles.scss"

const CartDropdown: FC<CartDropdownProps> = ({ cartItems, navigationButton, handleDropdown }) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    navigationButton();
    handleDropdown();
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__item">
        {cartItems.length ? (
          cartItems.map((cartItem, i) => (
            <CartItem key={i} cartItem={cartItem} />
          ))
        ) : (
            <span className="cart-dropdown__item--empty">Your cart is empty</span>
          )}
      </div>
      <button className="cart-dropdown__button" onClick={handleClick}></button>
    </div >
  )
}

export default CartDropdown;
