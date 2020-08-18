export const offers = [
	{
		id: "3",
		name: "Dyana Wing",
		price: 200,
		discount: 0,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		imageURL: "https://firebasestorage.googleapis.com/v0/b/operating-codex-272519.appspot.com/o/hats%2Fdyana-wing-so-8wFDFCnqvfI-unsplash.jpg?alt=media&token=604da956-3cbd-4d78-b316-9898918b672a"
	},
	{
		id: "2",
		name: "Frank Uyt",
		price: 600,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		discount: 0,
		imageURL: "https://firebasestorage.googleapis.com/v0/b/operating-codex-272519.appspot.com/o/jeans%2Ffrank-uyt-den-bogaard-UAA8SJuFk3Y-unsplash.jpg?alt=media&token=eb424cc1-61b2-4543-981c-f0aeaba8f8c0"
	},
	{
		id: "6",
		name: "Molly Mears",
		price: 420,
		discount: 0,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		imageURL: "https://firebasestorage.googleapis.com/v0/b/operating-codex-272519.appspot.com/o/shirts%2Fmolly-mears-yWZykf3tY9s-unsplash.jpg?alt=media&token=24d21e01-31ef-40db-8d4d-036f12b0ec63"
	},
	{
		id: "1",
		name: "Imani Bahati",
		price: 420,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		discount: 0,
		imageURL: "https://firebasestorage.googleapis.com/v0/b/operating-codex-272519.appspot.com/o/sneakers%2Falexander-rotker-l8p1aWZqHvE-unsplash.jpg?alt=media&token=29b7b05b-38be-46a2-93ea-d598e1a67222"
	},
];

export const sessionRegex: any = {
	username: /^[\s\w]{4,20}/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/
};


export const formatPath = (pathname: string) => {
	switch (pathname) {
		case "/products/hats":
			return "/1"
		case "/products/jackets":
			return "/2"
		case "/products/jeans":
			return "/3"
		case "/products/shirts":
			return "/4"
		case "/products/sneakers":
			return "/5"
		default:
			return "/"
	}
}