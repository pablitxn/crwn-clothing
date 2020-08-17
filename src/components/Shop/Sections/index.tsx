// React
import React, { FC } from "react";
// AntD
import { Card } from "antd";
// Types
import { ISections } from "./types";
// Styles
import "./styles.less";
// Custom Components
import Section from "components/Shop/Sections/Section";

const Sections: FC<ISections> = ({ sections, loading }) => {
	return (
		<Card title="sections" loading={loading}>
			{sections?.map((section: any, i: number) => (
				<Card.Grid key={i}>
					<Section section={section} />
				</Card.Grid>
			))}
		</Card>
	);
};

export default Sections;
