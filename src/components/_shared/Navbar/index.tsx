// React
import React, { FC } from "react";
// AntD
import { Menu, Input, Button, Row, Col } from "antd";
import {
	LoginOutlined,
	UserOutlined,
	ShoppingOutlined,
	HomeFilled,
} from "@ant-design/icons";
// Custom Hooks
import { useNavbar } from "hooks";
// Styles
import "./styles.less";

const { Search } = Input;

const Navbar: FC = () => {
	const alignCenter = { display: "flex", alignItems: "center" };

	const { handleClick, session } = useNavbar();

	return (
		<Row justify="center">
			<Col span={2}>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleClick}
					selectedKeys={[]}
					className="navbar"
				>
					<Menu.Item key="/" className="logo" style={alignCenter} icon={<HomeFilled />} />
				</Menu>
			</Col>

			<Col span={18} style={alignCenter}>
				<Search
					placeholder="¿Qué producto estás buscando?"
					onSearch={(value) => console.log(value)}
					enterButton
					size="large"
				/>
			</Col>

			<Col span={4}>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleClick}
					selectedKeys={[]}
					className="navbar"
				>
					{session ? (
						<Menu.Item key="my-account" className="session">
							<Button icon={<UserOutlined />}>Mi cuenta</Button>
						</Menu.Item>
					) : (
						<Menu.Item key="sign-in" className="session">
							<Button type="primary" icon={<LoginOutlined />}>
								Ingresar
							</Button>
						</Menu.Item>
					)}
					<Menu.Item
						key="cart"
						className="cart"
						icon={<ShoppingOutlined />}
						style={alignCenter}
					/>
				</Menu>
			</Col>
		</Row>
	);
};

export default Navbar;
