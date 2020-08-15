// React
import React, { FC, useState } from "react";
// Custom Components
// import FormInput from "components/_shared/FormInput";
// import CustomButton from "components/_shared/CustomButton";
//Types
import { SignInFormProps } from "components/Session/SignInForm/types";
// Styles
import "./styles.scss";

const SignInForm: FC<SignInFormProps> = ({ onSubmit, onGoogleSignIn }) => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	// const emailRegex = /^(\w|\d|\.)+@(\w)+\.(\w){2,4}$/;
	// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

	const handleEmail = (
		input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		// TODO: email validation
		setState({ ...state, email: input.target.value });
	};

	const handlePassword = (
		input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
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
				<span className="header__text">Sign in with your email and password</span>
			</header>
		</div>
	);
};

export default SignInForm;
