import React from "react";
// Custom Components
import CollectionItem from "components/CollectionItem";
// Styles
import "./styles.scss";

const CollectionPreview = ({ title, items }) => (
	<div>
		<h1>{title.toUpperCase()}</h1>
		<div>
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
