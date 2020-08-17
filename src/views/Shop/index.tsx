// React App
import React, { FC, useEffect } from "react";
// Custom Components
import Hero from "components/Shop/Hero";
import Offers from "components/Shop/Offers";
import Sections from "components/Shop/Sections";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { sectionsRequest } from "state/shop/actions";
import { sectionsSelector } from "state/shop/selectors";
// Styles
import "./styles.less";

const ShopView: FC = () => {
	const d = useDispatch();
	const $sections = useSelector((state: any) => sectionsSelector(state));

	const handleSearch = (value: string) => {
		console.log(value);
	};

	useEffect(() => {
		d(sectionsRequest());
	}, []);

	return (
		<div className="shop">
			<Hero onSearch={handleSearch} />
			<Offers />
			<Sections sections={$sections.data} loading={$sections.loading} />
		</div>
	);
};

export default ShopView;
