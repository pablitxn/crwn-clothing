import React, { FC } from "react";
// Custom Components
import Item from "components/Shop/CardProducts/Item";
// Types
import { CardProductsProps } from "./types"
// Styles
import "./styles.scss";

const CardProducts: FC<CardProductsProps> = ({ title, items }) => (
	<div>
		<h1>{title.toUpperCase()}</h1>
		<div>
			{items
				.map(({ name,
					price,
					imageUrl }, index) => (
						<Item key={index} name={name} price={price} imageUrl={imageUrl} />
					))}
		</div>
	</div>
);

export default CardProducts;
