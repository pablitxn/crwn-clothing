// React App
import React, { FC } from "react";
// Custom Components
import OverviewItem from "components/Shop/Overview";
// Utils
import SHOP_DATA from "utils/shop.data";
// Redux
// import requestProducts from "state/shop/actions";
// import shopDataSelector from "state/shop/selectors;"
// Styles
import "./styles.scss";

// TODO: tipado
const Overview: FC = () => {
	// const { title, items } = collection;

	return (
		<div className="shop">
			<h2 className="shop__title">Title</h2>
			<div className="shop__item">
				{SHOP_DATA.map((data, index) => {
					const items = data.items;
					return (
						<OverviewItem key={index} sections={items} />
					)
				})}
			</div>
		</div>
	);
}

export default Overview;

/**
 * talvez falta title en overview?
 */