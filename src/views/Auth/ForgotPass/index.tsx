// React
import React, { FC } from "react";
// Components
import RecoveryForm from "components/Auth/RecoveryForm";
// AntD
import { Row, Col, Typography } from "antd";
// Router
import { useHistory } from "react-router-dom";
// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { requestResetPassword } from "state/session/actions";
// import { resetPasswordSelector } from "state/session/selectors";

const { Title } = Typography;

const ForgotPass: FC = () => {
	// const d = useDispatch();
	const h = useHistory();
	// const resetPasswordReducer = useSelector((reduxState) => resetPasswordSelector(reduxState));

	const handleSubmit = (email: string) => {
		// d(requestResetPassword(email));
		console.log("correo para resetear ->", email);
	};

	const goBackButton = () => {
		h.push("/sign-in");
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
					<Title level={2}>Recuperar Contraseña</Title>
				</Row>
				<Row
					justify="space-around"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<RecoveryForm onSubmit={handleSubmit} goBackButton={goBackButton} />
				</Row>
			</Col>
		</Row>
	);
};

export default ForgotPass;
