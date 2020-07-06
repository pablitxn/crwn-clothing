// React
import React, { FC } from "react";
// Custom Components
import CartDropdown from "components/_shared/NavBar/CartDropdown";
import CartDropdownIcon from "components/_shared/NavBar/CartDropdown/CartDropdownIcon";
// Types
import { NavBarProps } from "./types";
// Styles
import "./styles.scss";

const NavBar: FC<NavBarProps> = ({ activeUser, hidden, loginButton }) => {

  return (
    <nav className="navbar">
      <img src="" alt="logo crwn clothing" className="navbar__logo" />
      <li className="navbar__options">
        <ul>SHOP</ul>
        <ul>CONTACT</ul>
        {activeUser ? (
          <ul>{activeUser.name}</ul>
        )
          : (
            <ul>SIG IN</ul>
          )
        }
        <ul>
          <CartDropdownIcon toggleCartHidden={() => { }} itemCount="" />
        </ul>
      </li>
      {hidden ? null : <CartDropdown />}
    </nav>
  )
}

export default NavBar;
