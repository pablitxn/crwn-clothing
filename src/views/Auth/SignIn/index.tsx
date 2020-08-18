// React
import React, { useEffect } from "react";
// Components
import SignInForm from "components/Auth/SignInForm";
// Custom Hooks
import { useNavbar } from "hooks";
// AntD
import { Row, Col, Typography } from "antd";
// Router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { signInGoogleRequest, signInRequest } from "state/session/actions";
// Types
import { User } from "components/Auth/SignInForm/types";

const { Title } = Typography;

const SignInView = () => {
	const d = useDispatch();
	const h = useHistory();
	const { session } = useNavbar();

	const handleSubmit = ({ username, password }: User) => {
		// d(requestSignIn({ username, password }));
		console.log(`el usuario es ${username} y su pass ${password}`);
	};

	const handleGoogleSignIn = () => d(signInGoogleRequest());

	const forgotPassButton = () => {
		h.push("/forgot-pass");
	};

	useEffect(() => {
		session && h.push("/");
	}, []);

	return (
		<Row
			justify="center"
			align="middle"
			style={{
				width: "100%",
				height: "100vh",
			}}
		>
			<Col xs={22} sm={10} xl={6}>
				<Row
					justify="start"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<Title level={2}>Iniciar Sesión</Title>
				</Row>
				<Row
					justify="space-around"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<SignInForm
						onSubmit={handleSubmit}
						forgotPassButton={forgotPassButton}
						onSignInGoogle={handleGoogleSignIn}
					/>
				</Row>
			</Col>
		</Row>
	);
};

export default SignInView;
