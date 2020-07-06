// React
import React, { FC } from "react";
// Types
import { CartDropdownItemProps } from "./types";
// Styles
import "./styles.scss";

const CartDropdownItem: FC<CartDropdownItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt="" />
      <div>
        <span className="cart-item__name">{name}</span>
        <span className="cart-item__details">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartDropdownItem;
