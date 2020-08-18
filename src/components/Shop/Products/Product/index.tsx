// React
import React, { FC } from "react";
// Types
import { IProduct } from "./types";
// AntD
import { Card } from "antd";

const { Meta } = Card;

const Product: FC<IProduct> = ({ product }) => {
	const { name, imageURL, price } = product;

	return (
		<Card hoverable style={{ width: 240 }} cover={<img alt={name} src={imageURL} />}>
			<Meta title={name} description={`increible precio -> $${price}`} />
		</Card>
	);
};

export default Product;
