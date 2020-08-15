// React
import React, { FC } from "react";
// Types
import { IProduct } from "./types";
// AntD
import { Card } from "antd";

const { Meta } = Card;

const Product: FC<IProduct> = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;

	return (
		<Card hoverable style={{ width: 240 }} cover={<img alt={name} src={imageUrl} />}>
			<Meta title={name} description={`increible precio -> $${price}`} />
		</Card>
	);
};

export default Product;
