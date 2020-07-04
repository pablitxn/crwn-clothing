// React App
import React from "react";
// Utils
import SHOP_DATA from "utils/shop.data";
// Custom Components
import CardProducts from "components/Shop/CardProducts";

const Shop = () => {
	return (
		<div>
			{SHOP_DATA.map((data, index) => {
				const items = data.items;
				return (
					<CardProducts key={index} title="Ofers" items={[]} />
				)
			})}
		</div>
	);
}

export default Shop;
