// React App
import React, { FC } from "react";
// Custom Components
import Hero from "components/Shop/Hero";
import Offers from "components/Shop/Offers";
import Sections from "components/Shop/Sections";
// Utils
import { sections } from "utils";
// Redux
// Styles
import "./styles.less";

const ShopView: FC = () => {
	const handleSearch = (value: string) => {
		console.log(value);
	};

	return (
		<div className="shop">
			<Hero onSearch={handleSearch} />
			<Offers />
			<Sections sections={sections} />
		</div>
	);
};

export default ShopView;
