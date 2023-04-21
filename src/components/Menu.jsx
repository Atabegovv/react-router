import { NavLink } from "react-router-dom";

function Menu() {
	return (
		<nav>
			<NavLink to="." end>
				home
			</NavLink>
			<NavLink to="about">about</NavLink>
			<NavLink to="contacts">contacts</NavLink>
		</nav>
	);
}

export default Menu;
