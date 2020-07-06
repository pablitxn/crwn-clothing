// React App
import React, { FC } from "react";
// Custom Components
import Section from "components/Shop/Section";
// Utils
import { sections } from "utils/shop.data";
// Redux
// import requestProducts from "state/shop/actions";
// import shopDataSelector from "state/shop/selectors;"
// Styles
import "./styles.scss";

const Sections: FC = () => {

	return (
		<div className="sections">
			<section>
				{sections
					.map((section, i) => (
						<Section key={i} section={section} size="normal" />
					))}
			</section>
		</div>
	);
}

export default Sections;
