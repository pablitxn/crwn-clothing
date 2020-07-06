// React App
import React, { FC } from "react";
// Custom Components
import LoginForm from "components/Auth/LoginForm";
import SignUpForm from "components/Auth/SignUpForm";
// Redux
import { requestLogin, requestSignUp } from "state/auth/actions";
import { LoginSelector, SignUpSelector } from "state/auth/selectors";
// Types
import { AccountTypes } from "components/Auth/LoginForm/types"
// Styles
import "./styles.scss";

const Auth = () => {
	const handleSubmit = (account: AccountTypes) => {
		console.log(account)
	}

	return (
		<div className="auth">
			<LoginForm onSubmit={handleSubmit} error={false} isLoading={false} />
			<SignUpForm onSubmit={handleSubmit} error={false} isLoading={false} />
		</div>
	)
};

export default Auth;
