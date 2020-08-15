// React
import React, { FC } from "react";
// Custom Components
// import FormInput from "components/_shared/FormInput";
// import CustomButton from "components/_shared/CustomButton";
// Types
import { IConfirmationEmail } from "./types";
// Styles
import "./styles.less";

const ConfirmationEmail: FC<IConfirmationEmail> = () => {
	return (
		<div className="login">
			<h2>confirmation email</h2>
		</div>
	);
};

export default ConfirmationEmail;
