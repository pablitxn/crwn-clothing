// React
import React, { FC } from "react";
// AntD
import { Card } from "antd";
// Types
import { IProducts } from "./types";
// Custom Components
import Product from "components/Shop/Products/Product";

const Products: FC<IProducts> = ({ products, loading }) => {
	return (
		<Card title="products" loading={loading}>
			{products?.map((product: any, i: number) => (
				<Card.Grid key={i}>
					<Product product={product} />
				</Card.Grid>
			))}
		</Card>
	);
};

export default Products;
