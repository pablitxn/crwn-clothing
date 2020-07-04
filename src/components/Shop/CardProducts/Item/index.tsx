import React, { FC } from "react";
// Types
import { ItemProps } from "./types"
// Styles
import "./styles.scss";

const Item: FC<ItemProps> = ({ name, price, imageUrl }) =>
	<div className="item">
		<div
			className="item__image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="item__footer">
			<span className="item__namename">{name}</span>
			<span className="item__price">{price}</span>
		</div>
	</div>


export default Item;
