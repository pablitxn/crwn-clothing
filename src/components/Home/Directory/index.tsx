// React App
import React, { FC } from "react";
// Custom component
import MenuItem from "components/Home/Directory/MenuItem";
// Types
import { DirectoryProps } from "./types"
// Styles
import "./styles.scss";

const Directory: FC<DirectoryProps> = ({ sections }) => {

	return (
		<div className="section">
			{sections.map(({ title, imageUrl, id, size }) => (
				<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
			))}
		</div>
	);

}

export default Directory;
