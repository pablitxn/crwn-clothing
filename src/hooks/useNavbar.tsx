// React
import { useState } from "react";
// Router
import { useHistory } from "react-router-dom";

type HandleClick = (event: MenuEvent) => void;
type handleNavigation = (route: string) => void;

type MenuEvent = {
	item: any;
	key: any;
	keyPath: any;
	domEvent: any;
};

export const useNavbar = () => {
	const [current, setCurrent] = useState("");
	const h = useHistory();

	const handleNavigation: handleNavigation = (route) => {
		switch (route) {
			case "/":
				h.push("/");
				return;
			case "/sign-in":
				h.push("/sign-in");
				return;
			case "/cart":
				h.push("/cart");
				return;
		}
	};

	const handleClick: HandleClick = ({ key }) => {
		setCurrent(key);
		handleNavigation(key);
	};

	return { current, handleClick };
};
