// React
import React, { FC } from "react";
// Custom Components
// import CheckoutItem from "components/Checkout/Item";
// import StripeButton from "components/_shared/StripeButton"
// Redux
import cartItems from "utils/shop.data";
// import request from "state//actions";
// import { selectors } from "state//selectors";
// Styles
import "./styles.less";

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
		</div>
	);
};

export default Checkout;
