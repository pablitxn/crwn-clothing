// React
import React, { FC } from "react";
// AntD
import { Input } from "antd";
// Types
import { IHero } from "./types";
// Styles
import "./styles.less";

const { Search } = Input;

const Hero: FC<IHero> = ({ onSearch }) => {
	return (
		<div className="hero">
			<div className="content">
				<h2 className="">Bienvenide a CRWN-CLOTHING?</h2>
				<Search
					placeholder="Autos, Casas, Yates..."
					onSearch={onSearch}
					enterButton="¡Buscar!"
					size="large"
				/>
			</div>
		</div>
	);
};

export default Hero;
