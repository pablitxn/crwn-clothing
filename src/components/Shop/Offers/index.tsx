// React
import React, { FC } from "react";
// Types
import { IOffers } from "./types";
// Styles
import "./styles.less";
// AntD
import { Carousel } from "antd";
// Custom Components
import Offer from "components/Shop/Offers/Offer";
// Utils
import { offers } from "utils";

const Offers: FC<IOffers> = ({}) => {
	return (
		<div className="offers">
			<Carousel dots autoplay dotPosition="left">
				<div>
					<Offer items={offers} titleSection="Lo mejor de la semana" />
				</div>
				<div>
					<Offer items={offers} titleSection="40% OFF llevando 2 o más prendas" />
				</div>
				<div>
					<Offer items={offers} titleSection="¡HOT SALE!" />
				</div>
				<div>
					<Offer items={offers} titleSection="No te pierdas estas ofertas" />
				</div>
			</Carousel>
		</div>
	);
};

export default Offers;
