// React App
import React from "react";
// Custom Components
import LoginForm from "components/Auth/LoginForm";
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
		</div>
	)
};

export default Auth;
