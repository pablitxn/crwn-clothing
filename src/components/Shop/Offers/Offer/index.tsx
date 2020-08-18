// React
import React, { FC } from "react";
// Types
import { IOffer } from "./types";
// Styles
import "./styles.less";
// Custom Components
import Product from "components/Shop/Products/Product";

const Offer: FC<IOffer> = ({ items, titleSection }) => {
	return (
		<div className="offer">
			<h3 className="title">{titleSection}</h3>
			<div className="cards">
				{items.map((item: any, i: number) => (
					<Product key={i} product={item} />
				))}
			</div>
		</div>
	);
};

export default Offer;
