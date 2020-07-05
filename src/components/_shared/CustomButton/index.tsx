// React
import React, { FC } from "react";
// Types
import { CustomButtonProps } from "components/_shared/CustomButton/types"
// Styles
import "./styles.scss";

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, className = "" }) => (
	<button className={`${className} custom-button`} onClick={onClick}>
		{children}
	</button>
);

export default CustomButton;
