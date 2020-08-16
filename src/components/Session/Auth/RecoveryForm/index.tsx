// React
import React, { FC } from "react";
// AntD
import { Input, Form, Button, Row, Alert } from "antd";
// Types
import { IRecoveryForm } from "./types";

const RecoveryForm: FC<IRecoveryForm> = ({ onSubmit, goBackButton, success }) => {
	return (
		<Form
			// onSubmit={handleSubmit}
			style={{
				width: "100%",
			}}
		>
			{success && (
				<Alert
					message="Ya te enviamos un correo electrónico con las instrucciones para reestablecer tu contraseña."
					type="info"
				/>
			)}
			<Form.Item
				label="Usuario o Email"
				hasFeedback
				// validateStatus={errors.email && "error"}
				// help={errors.email ? errors.email : null}
			>
				<Input
					id="email"
					name="email"
					// onChange={handleChange}
					// value={values.email}
					// prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Button type="primary" htmlType="submit">
						Enviar Email
					</Button>
				</Row>
				<Row justify="center" align="middle">
					<a onClick={goBackButton}>Regresar al login</a>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default RecoveryForm;
