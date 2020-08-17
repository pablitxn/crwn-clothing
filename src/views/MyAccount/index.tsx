// React
import React, { FC, useState, useEffect } from "react";
// Custom Components
import Profile from "components/MyAccount/Profile";
import ConfigsMenu from "components/MyAccount/ConfigsMenu";
// Router
// import { useHistory, useLocation } from "react-router-dom";
// AntD
import { Col, Row } from "antd";

const MyAccountView: FC = () => (
	<Row style={{ height: "768px" }}>
		<Col span={6}>
			<ConfigsMenu />
		</Col>
		<Col span={18}>
			<Profile />
		</Col>
	</Row>
);

export default MyAccountView;
