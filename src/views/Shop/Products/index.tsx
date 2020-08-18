// React App
import React, { FC, useEffect } from "react";
// Custom Components
import Products from "components/Shop/Products";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { productsRequest } from "state/shop/actions";
import { productsSelector } from "state/shop/selectors";
// Router
import { useHistory } from "react-router-dom";
// Styles
import "./styles.less";

const ProductsView: FC = () => {
	const d = useDispatch();
	const h = useHistory();
	const $products = useSelector((state: any) => productsSelector(state));

	useEffect(() => {
		const { pathname } = h.location;
		d(productsRequest(pathname));
	}, []);

	return (
		<>
			<Products products={$products.data} loading={$products} />
		</>
	);
};

export default ProductsView;
