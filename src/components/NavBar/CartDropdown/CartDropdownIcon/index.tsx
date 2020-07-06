// React
import React, { FC } from "react";
// Types
import { CartDropdownIconProps } from "./types"
// Styles
import "./styles.scss";


const CartDropdownIcon: FC<CartDropdownIconProps> = ({ toggleCartHidden, itemCount }) => {

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <div className="shoping-icon" />
      <div className="cart-icon__count">{itemCount}</div>
    </div>
  )
}

export default CartDropdownIcon;
