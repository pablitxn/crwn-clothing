// React
import React, { FC, useEffect } from "react";
// Custom Components
import Profile from "components/MyAccount/Profile";
import ConfigsMenu from "components/MyAccount/ConfigsMenu";
// Custom Hooks
import { useNavbar } from "hooks";
// Router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { signOutRequest } from "state/session/actions";
// AntD
import { Col, Row } from "antd";

const MyAccountView: FC = () => {
	const d = useDispatch();
	const h = useHistory();
	const { $activeUser, session } = useNavbar();

	const handleSignOut = () => d(signOutRequest());

	useEffect(() => {
		!session && h.push("/");
	}, [$activeUser]);

	return (
		<Row style={{ height: "768px" }}>
			<Col span={6}>
				<ConfigsMenu />
			</Col>
			<Col span={18}>
				<Profile onSignOut={handleSignOut} />
			</Col>
		</Row>
	);
};

export default MyAccountView;
