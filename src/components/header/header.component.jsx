import React from "react";
// Logo
import { ReactComponent as Logo } from "assets/crown.svg";
// Styles
import "./header.styles.scss";
// Router
import { Link } from "react-router-dom";

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				Shop
			</Link>
			<Link className="option" to="/contact">
				CONTANCT
			</Link>
		</div>
	</div>
);

export default Header;
