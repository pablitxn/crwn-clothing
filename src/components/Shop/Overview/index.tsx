// @ts-nocheck
// React App
import React, { FC } from "react";
// Custom component
import Section from "components/Shop/Overview/Section";
// Types
import { DirectoryProps } from "./types"
// Styles
import "./styles.scss";

const Directory: FC<DirectoryProps> = ({ sections }) => {

	return (
		<div className="section">
			{sections.map((section, i) => (
				<Section key={i} section={section} />
			))}
		</div>
	);

}

export default Directory;
