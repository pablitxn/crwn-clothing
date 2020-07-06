// React
import React, { FC, useState } from "react";
// Custom Components
import FormInput from "components/_shared/FormInput";
import CustomButton from "components/_shared/CustomButton";
// Firebase
import { signInWithGoogle } from "utils/firebase"
//Types
import { LoginFormProps } from "components/Auth/LoginForm/types";
// Styles
import "./styles.scss";

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	// const emailRegex = /^(\w|\d|\.)+@(\w)+\.(\w){2,4}$/;
	// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

	const handleEmail = (input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		// TODO: email validation
		setState({ ...state, email: input.target.value });
	};

	const handlePassword = (input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		// TODO: email validation
		setState({ ...state, password: input.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(state);
	};

	return (
		<div className="login">
			<header className="header">
				<h2 className="header__title">I already have an account</h2>
				<span className="header__text" >Sign in with your email and password</span>
			</header>
			<form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
				<FormInput
					className="form__input"
					type="email"
					onChange={handleEmail}
					value={state.email}
					label="email"
				/>
				<FormInput
					className="form__input"
					type="password"
					onChange={handlePassword}
					value={state.password}
					label="password"
				/>
				<div className="form__submit">
					<CustomButton className="form__button" type="submit" onClick={handleSubmit}>Sign In</CustomButton>
					<CustomButton className="form__button" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
