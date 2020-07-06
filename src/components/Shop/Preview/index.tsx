import React, { FC } from "react";
// Custom Components
import DetailProduct from "components/Shop/Preview/Product";
// Types
import { CardProductProps } from "./types"
// Styles
import "./styles.scss";

// TODO: refactor quitar ? esto es un contenedor de cards no una card
const CardProduct: FC<CardProductProps> = ({ title, items }) => (
	<div className="card-product" >
		<h2 className="card-product__title">{title?.toUpperCase()}</h2>
		<div className="card-product__item">
			{items?.map((item, i) => (
				<DetailProduct key={i} item={item} addItem={() => { }} />
			))}
		</div>
	</div>
);

export default CardProduct;

// TODO: revisar, en el mapeo solia haber un filter (idx < 4)
/**
	{items
		.filter((item, idx) => idx < 4)
		.map(item => (
			<CollectionItem key={item.id} item={item} />
	))}
 */