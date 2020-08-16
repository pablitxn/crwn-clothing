// React
import React from "react";
// Custom Components
import NewPassForm from "components/Session/Auth/NewPassForm";
// AntD
import { Row, Col, Typography } from "antd";
// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { requestSetPassword } from "state/session/actions";
// import { useHistory } from "react-router-dom";
// import { emailSelector } from "state/session/selectors";

const { Title } = Typography;

const SetPassword = () => {
	// const d = useDispatch();
	// const h = useHistory();
	// const { email } = useSelector((reduxState) => emailSelector(reduxState));

	const handleSubmit: any = ({ password_reset_token, password }: any) => {
		// d(requestSetPassword({ password_reset_token, password, email }));
		console.log(`pass -> ${password}  |  token -> ${password_reset_token}`);
	};

	const goBackButton = () => {
		// h.push("/session/signin");
	};

	return (
		<Col span={24}>
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
						<Title level={2}>Establecer contraseña</Title>
					</Row>
					<Row
						justify="space-around"
						align="middle"
						style={{
							width: "100%",
						}}
					>
						<NewPassForm onSubmit={handleSubmit} goBackButton={goBackButton} />
					</Row>
				</Col>
			</Row>
		</Col>
	);
};

export default SetPassword;
