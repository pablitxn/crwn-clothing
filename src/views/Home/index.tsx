// React App
import React from "react";
// Custom Components
import Directory from "components/HomePage/Directory";
// Styles
import "./styles.scss";

const HomePage = () => {
	const sections = [{
		title: "lorem",
		imageUrl: "",
		size: "sm",
	}]

	return (
		<div className="homepage">
			<Directory sections={sections} />
		</div>
	);
}

export default HomePage;
