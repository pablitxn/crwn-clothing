import React, { FC, useState } from "react";
// Custom Components
import FormInput from "components/_shared/FormInput";
import CustomButton from "components/_shared/CustomButton";
// Firebase
import { signInWithGoogle } from "utils/firebase"
//Types
import { LoginFormProps } from "./types";
// Styles
import "./styles.scss";

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const emailRegex = /^(\w|\d|\.)+@(\w)+\.(\w){2,4}$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

	const handleEmail = (event) => {
		event.preventDefault();
		console.log(event.target)
		// setState(...state, email: event.target.value as string);
	};

	const handlePassword = (event) => {
		event.preventDefault();
		console.log(event.target)
		// setState(...state, password: event.target.value as string);
	};


	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(state);
	};

	return (
		<div>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
				<FormInput
					className="form__input"
					name="email"
					type="email"
					handleChange={handleEmail}
					value={state.email}
					label="email"
					required
				/>
				<FormInput
					className="form__input"
					name="password"
					type="password"
					handleChange={handlePassword}
					value={state.password}
					label="password"
					required
				/>
				<CustomButton className="form__button" type="submit" onClick={handleSubmit}>Sign In</CustomButton>
				<CustomButton className="form__button" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
			</form>
		</div>
	);
}

export default LoginForm;
