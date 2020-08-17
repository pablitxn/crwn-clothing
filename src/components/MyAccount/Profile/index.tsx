// React
import React, { FC } from "react";
// AntD
import { Row, Col, Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Types
import { IProfile } from "./types";
// Styles
import "./styles.less";

const Profile: FC<IProfile> = () => {
	return (
		<div style={{ width: "100%" }}>
			<Row>
				<Col span={24}>
					<h2> Mi cuenta </h2>
				</Col>
			</Row>

			<Col span={24}>
				<Row justify="center">
					<Avatar size={128} icon={<UserOutlined />} />
				</Row>
				<Row justify="center">
					<h3>Juan Domingo</h3>
					<h4>comprador</h4>
				</Row>
			</Col>

			<Col span={24}>
				<Col span={12}>
					<div>
						<h4>Correo</h4>
						<span>juan.domingo@peron.net</span>
						<h4>Telefono</h4>
						<span>+54 11 77845840</span>
						{/* <Divider type="vertical" /> */}
					</div>
				</Col>
				<Col span={12}>
					<div>
						<h4>Direccion</h4>
						<span>Avenida de Mayo 678</span>
						<h4>Verificado</h4>
						<span>VERIFICADO</span>
					</div>
				</Col>
			</Col>
		</div>
	);
};

export default Profile;
