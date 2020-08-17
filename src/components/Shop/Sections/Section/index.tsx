// React
import React, { FC } from "react";
// Types
import { ISection } from "./types";
// Styles
import "./styles.less";
// AntD
import { Card } from "antd";

const Section: FC<ISection> = ({ section }) => {
	const { title, imageURL } = section;

	return (
		<div className="section">
			<h3>{title.toUpperCase()}</h3>
			<Card hoverable style={{ width: 240 }} cover={<img src={imageURL} />}></Card>
		</div>
	);
};

export default Section;
