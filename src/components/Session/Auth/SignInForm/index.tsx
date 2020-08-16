// React
import React, { FC } from "react";
// AntD
import { Col, Row, Input, Form, Button } from "antd";
// Types
import { ISignInForm } from "./types";

const SignInForm: FC<ISignInForm> = ({ onSubmit, forgotPassButton }) => {
	const handleSubmit: any = () => {};

	return (
		<Form
			// onSubmit={handleSubmit}
			style={{
				width: "100%",
			}}
		>
			<Form.Item
				label="Usuario o Email"
				hasFeedback
				// validateStatus={errors.username && "error"}
				// help={errors.username ? errors.username : null}
			>
				<Input
					id="username"
					name="username"
					// onChange={handleChange}
					// value={values.username}
					// prefix={}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				label="Contraseña"
				hasFeedback
				// validateStatus={errors.password && "error"}
				// help={errors.password ? errors.password : null}
			>
				<Input.Password
					id="password"
					name="password"
					// onChange={handleChange}
					// value={values.password}
					// prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Col span={12}>
						<Button block type="primary" htmlType="submit">
							Iniciar Sesión
						</Button>
					</Col>
				</Row>
				<Row justify="center" align="middle">
					<a onClick={forgotPassButton}>¿Olvidaste tu contraseña?</a>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default SignInForm;
