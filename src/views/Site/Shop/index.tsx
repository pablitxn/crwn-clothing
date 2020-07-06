// React App
import React, { FC } from "react";
// Custom Components
import CardProducts from "components/Site/Shop/Preview";
// Utils
import SHOP_DATA from "utils/shop.data";
// Redux
// import requestProducts from "state/shop/actions";
// import shopDataSelector from "state/shop/selectors;"
// Styles
import ".styles.scss";

// TODO: tipado
const Shop: FC = ({ collection }: any) => {
	const { title, items } = collection;

	return (
		<div className="shop">
			<h2 className="shop__title">Title</h2>
			<div className="shop__item">
				{SHOP_DATA.map((data, index) => {
					const items = data.items;
					return (
						<CardProducts key={index} title="Ofers" items={items} />
					)
				})}
			</div>
		</div>
	);
}

export default Shop;
