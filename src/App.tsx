// React
import React, { FC } from "react";
// Custom Components
import Navbar from "components/_shared/Navbar";
import HandleSwitch from "components/_shared/HandleSwitch";
// AntD
import { Layout } from "antd";
// Routes
import routes from "./routes";
// Styles
import "./App.less";

const { Header, Footer, Content } = Layout;

const App: FC = () => (
	<Layout>
		<Header className="header">
			<Navbar activeUser={false} />
		</Header>
		<Content className="site-layout">
			<HandleSwitch routes={routes} />
		</Content>
		<Footer className="footer">crw-clothing® 2020 </Footer>
	</Layout>
);

export default App;
