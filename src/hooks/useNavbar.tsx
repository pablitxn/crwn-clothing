// React
import { useState } from "react";
// Redux
// import { useSelector } from "react-redux";
// import { activeUserSelector } from "state/session/selectors";
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
	// const activeUser = useSelector((state: any) => activeUserSelector(state));
	const h = useHistory();
	const session = sessionStorage.getItem("session_active") ?? false;

	const handleNavigation: handleNavigation = (route) => {
		switch (route) {
			case "/":
				h.push("/");
				return;
			case "sign-in":
				h.push("/auth/sign-in");
				return;
			case "cart":
				h.push("/cart");
				return;
			case "my-account":
				h.push("/session/my-account");
		}
	};

	const handleClick: HandleClick = ({ key }) => {
		setCurrent(key);
		handleNavigation(key);
	};

	return { current, handleClick, session };
};
