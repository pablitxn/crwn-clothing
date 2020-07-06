import { configure, addDecorator, addParameters } from "@storybook/react";
// import logo from "./assets";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";

const theme = create({
	base: "light",
	// brandImage: logo,
	brandTitle: "crwn clothing",
	url: "",
	fontBase: 'Rubik, "Rubik Medium"',
});

// Customize the UI a bit
addParameters({
	options: { theme },
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
});

addDecorator(withKnobs);

function loadStories() {
	return [
		// Ensure we load Welcome First
		require.context("../docs", true, /README.mdx/),
	];
}

configure(loadStories(), module);
