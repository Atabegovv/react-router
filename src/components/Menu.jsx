import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav>
			<NavLink to="." end>
				home
			</NavLink>
			<NavLink to="about">about</NavLink>
			<NavLink to="contacts">contacts</NavLink>
			<NavLink to="courses" end>
				courses
			</NavLink>
		</nav>
	);
}

export default Menu;
