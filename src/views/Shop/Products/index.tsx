// React App
import React, { FC } from "react";
// Custom Components
import Product from "components/Shop/Product";
// Utils
import SHOP_DATA from "utils/shop.data";
// Redux
// import requestProducts from "state/shop/actions";
// import shopDataSelector from "state/shop/selectors;"
// Styles
import "./styles.scss";

// TODO: tipado
const Products: FC = () => {
  const products = SHOP_DATA.map((item) => {
    const data = item.items
    return data
  })

  return (
    <div className="products">
      {products.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </div>
  );
}

export default Products;
