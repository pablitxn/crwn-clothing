// React App
import React, { FC } from "react";
// Custom Components
import SignInForm from "components/Session/SignInForm";
import SignUpForm from "components/Session/SignUpForm";
// Redux
// import { requestLogin, requestSignUp } from "state/auth/actions";
// import { LoginSelector, SignUpSelector } from "state/auth/selectors";
// Styles
import "./styles.scss";

const Session: FC = () => {
	const handleSubmit = () => {
	}

	return (
		<div className="session">
			<SignInForm onSubmit={handleSubmit} onGoogleSignIn={handleSubmit} />
			<SignUpForm onSubmit={handleSubmit} />
		</div>
	)
};

export default Session;
