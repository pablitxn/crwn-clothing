// React
import React from "react";
// Components
import SignInForm from "components/Session/SignInForm";
// AntD
import { Row, Col, Typography } from "antd";
// Redux
// import { useDispatch } from "react-redux";
// import { requestSignIn } from "state/session/actions";
// import { useHistory } from "react-router-dom";

const { Title } = Typography;
type HandleSubmit = (username: string, password: string) => void;

const SignInView = () => {
	// const d = useDispatch();
	// const h = useHistory();

	const handleSubmit: HandleSubmit = (username, password) => {
		// d(requestSignIn({ username, password }));
		console.log(`el usuario es ${username} y su pass ${password}`);
	};

	const forgotPassButton = () => {
		// h.push("/session/recovery");
	};

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
					<SignInForm onSubmit={handleSubmit} forgotPassButton={forgotPassButton} />
				</Row>
			</Col>
		</Row>
	);
};

export default SignInView;
