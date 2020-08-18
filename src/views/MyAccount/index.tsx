// React
import React, { FC, useState, useEffect } from "react";
// Custom Components
import Profile from "components/MyAccount/Profile";
import ConfigsMenu from "components/MyAccount/ConfigsMenu";
// Custom Hooks
import { useNavbar } from "hooks";
// Router
// import { useHistory, useLocation } from "react-router-dom";
// AntD
import { Col, Row } from "antd";

const MyAccountView: FC = () => {
	const { $activeUser } = useNavbar();

	useEffect(() => {
		console.log($activeUser);
	}, [$activeUser]);

	return (
		<Row style={{ height: "768px" }}>
			<Col span={6}>
				<ConfigsMenu />
			</Col>
			<Col span={18}>
				<Profile />
			</Col>
		</Row>
	);
};

export default MyAccountView;
