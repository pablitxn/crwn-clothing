// React App
import React from "react";
// Utils
import SHOP_DATA from "./shop.data";
// Custom Components
import CollectionPreview from "components/CollectionPreview";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
