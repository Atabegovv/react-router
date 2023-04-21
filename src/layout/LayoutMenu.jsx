import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function LayoutMenu() {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	);
}

export default LayoutMenu;
