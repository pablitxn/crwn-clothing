// React App
import React, { FC } from "react";
// Custom Components
import Directory from "components/Home/Directory";
// Redux
// import { DirectorySectionsSelector } from "state/"
// Styles
import "./styles.scss";

const Home: FC = () => {
	const sections = [{
		title: "lorem",
		imageUrl: "",
		size: "sm",
	}]

	return (
		<div className="home">
			<Directory sections={sections} />
		</div>
	);
}

export default Home;
