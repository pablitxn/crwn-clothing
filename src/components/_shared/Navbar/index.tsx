// React
import React, { FC, useState } from "react";
import { INavbar } from "./types";
// Styles
import "./styles.less";
// AntD
import { Menu, Input, Button } from "antd";
import {
	LoginOutlined,
	UserOutlined,
	ShoppingOutlined,
	HomeFilled,
} from "@ant-design/icons";

const { Search } = Input;

const Navbar: FC<INavbar> = ({ activeUser }) => {
	const [state, setState] = useState({ current: "mail" });

	const { current } = state;

	const handleNavigation: React.EventHandler<any> = (e) => {
		console.log(`navbar / handleNavigation -> key: ${e.key}`);
		setState({ ...state, current: e.key });
	};

	return (
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={["1"]}
			onClick={handleNavigation}
			selectedKeys={[current]}
			className="navbar"
		>
			<Menu.Item key="home" className="logo" icon={<HomeFilled />}></Menu.Item>
			<Menu.Item className="search">
				<Search
					placeholder="¿Qué producto estás buscando?"
					onSearch={(value) => console.log(value)}
					enterButton
					size="large"
				/>
			</Menu.Item>
			<Menu.Item key="session" className="session">
				{activeUser ? (
					<Button type="ghost" icon={<UserOutlined />}>
						Mi cuenta
					</Button>
				) : (
					<Button type="primary" icon={<LoginOutlined />}>
						Ingresar
					</Button>
				)}
			</Menu.Item>
			<Menu.Item key="cart" className="cart" icon={<ShoppingOutlined />}></Menu.Item>
		</Menu>
	);
};

export default Navbar;
