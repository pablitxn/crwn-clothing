// React
import React, { FC, useEffect, useState } from "react";
// Components
import RecoveryForm from "components/Session/RecoveryForm";
// AntD
import { Row, Col, Typography } from "antd";
// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { requestResetPassword } from "state/session/actions";
// import { useHistory } from "react-router-dom";
// import { resetPasswordSelector } from "state/session/selectors";

const { Title } = Typography;

const ForgotPass = () => {
	const [statusRequest, setStatusRequest] = useState(false);
	// const d = useDispatch();
	// const h = useHistory();
	// const resetPasswordReducer = useSelector((reduxState) => resetPasswordSelector(reduxState));

	const handleSubmit: any = (email: string) => {
		// d(requestResetPassword(email));
		console.log(email);
	};

	const goBackButton = () => {
		// h.push("/session/signin");
	};

	// useEffect(() => {
	// 	if (resetPasswordReducer) {
	// 		setStatusRequest(true);
	// 	} else {
	// 		setStatusRequest(false);
	// 	}
	// }, [resetPasswordReducer]);

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
					<RecoveryForm
						onSubmit={handleSubmit}
						goBackButton={goBackButton}
						success={statusRequest}
					/>
				</Row>
			</Col>
		</Row>
	);
};

export default ForgotPass;
