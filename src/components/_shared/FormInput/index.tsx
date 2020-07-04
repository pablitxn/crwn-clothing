import React from "react";
// Styles
import "./styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input />
		{label ? (
			<label className={`${otherProps.value.lengh ? "shrink" : ""} form-input-label`}>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
