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
// Utils
import { sections } from "utils";
// Styles
import "./styles.less";

// test
import rsf from "state/firebase";

const ShopView: FC = () => {
	const d = useDispatch();
	// const { loading, data, error } = useSelector((state: any) => sectionsSelector(state));
	const section = useSelector((state: any) => sectionsSelector(state));

	const handleSearch = (value: string) => {
		console.log(value);
	};

	useEffect(() => {
		d(sectionsRequest());
	}, []);

	return (
		<div className="shop">
			{/* {console.log("sections", section)} */}
			<Hero onSearch={handleSearch} />
			<Offers />
			<Sections sections={sections} />
		</div>
	);
};

export default ShopView;
