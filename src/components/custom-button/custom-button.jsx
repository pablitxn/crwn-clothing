// React
import React from "react";
// Styles
import "./styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
