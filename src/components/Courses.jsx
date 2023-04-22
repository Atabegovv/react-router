import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import CoursesData from '../data/CoursesData';

function Courses() {
	const location = useLocation();
	const query = queryString.parse(location.search);
	console.log(location);
	console.log(query);

	return (
		<>
			<h1>Courses</h1>
			<div className="courses">
				{CoursesData.map((course) => (
					<NavLink to={course.slug} key={course.id} className='course'>
						{course.title}
					</NavLink>
				))}
			</div>
		</>
	);
}

export default Courses;
