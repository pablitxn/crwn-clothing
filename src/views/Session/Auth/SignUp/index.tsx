// React
import React from "react";
// Components
import SignUpForm from "components/Session/Auth/SignUpForm";
// AntD
import { Row, Col, Typography } from "antd";
// Redux
// import { useDispatch } from "react-redux";
// import { requestSignIn } from "state/session/actions";
// import { useHistory } from "react-router-dom";

const { Title } = Typography;

const SignUpView = () => {
	// const d = useDispatch();
	// const h = useHistory();

	const handleSubmit: any = (username: string, password: string) => {
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
					<Title level={2}>Crear cuenta</Title>
				</Row>
				<Row
					justify="space-around"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<SignUpForm onSubmit={handleSubmit} forgotPassButton={forgotPassButton} />
				</Row>
			</Col>
		</Row>
	);
};

export default SignUpView;
