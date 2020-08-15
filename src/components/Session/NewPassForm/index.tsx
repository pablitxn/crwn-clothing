// React
import React, { FC } from "react";
// Custom Components
// import FormInput from "components/_shared/FormInput";
// import CustomButton from "components/_shared/CustomButton";
// Types
import { INewPassForm } from "./types";
// Styles
import "./styles.less";

const NewPassForm: FC<INewPassForm> = () => {
	return (
		<div className="login">
			<h2>NEW PASS FORM</h2>
		</div>
	);
};

export default NewPassForm;
