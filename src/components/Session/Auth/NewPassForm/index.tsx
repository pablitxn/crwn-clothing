// React
import React, { FC } from "react";
// AntD
import { Row, Input, Form, Button, Alert } from "antd";
// Types
import { INewPassForm } from "./types";

const NewPassForm: FC<INewPassForm> = ({ onSubmit, goBackButton }) => {
	return (
		<Form
			// onSubmit={handleSubmit}
			style={{
				width: "100%",
			}}
		>
			<Alert
				message="La contraseña debe tener entre 8 y 16 dígitos, una letra mayúscula y un caracter especial (!#%&?)"
				type="info"
			/>
			<Form.Item
				label="Codigo de seguridad"
				hasFeedback
				// validateStatus={errors.password_reset_token && "error"}
				// help={errors.password_reset_token ? errors.password_reset_token : null}
			>
				<Input
					id="password_reset_token"
					name="password_reset_token"
					// onChange={handleChange}
					// value={values.password_reset_token}
					// prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Ingresa el codigo de segurida que enviamos a tu email"
				/>
			</Form.Item>
			<Form.Item
				label="Contraseña"
				hasFeedback
				// validateStatus={errors.username && "error"}
				// help={errors.username ? errors.username : null}
			>
				<Input.Password
					id="password"
					name="password"
					// onChange={handleChange}
					// value={values.password}
					// prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
					type="password"
					placeholder="Contraseña"
				/>
			</Form.Item>
			<Form.Item
				label="Repetir Contraseña"
				hasFeedback
				// validateStatus={errors.password && "error"}
				// help={errors.password ? errors.password : null}
			>
				<Input.Password
					id="repeatPassword"
					name="repeatPassword"
					// onChange={handleChange}
					// value={values.repeatPassword}
					// prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
					type="password"
					placeholder="Repetí la contraseña"
					style={{ marginBottom: "2rem" }}
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Button type="primary" htmlType="submit">
						Generá tu contraseña!
					</Button>
				</Row>
				<Row justify="center" align="middle">
					<a onClick={goBackButton}>Regresar al login</a>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default NewPassForm;
