import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import CoursesData from '../data/CoursesData';

function SingleCourse() {
	const params = useParams();
	const navigate = useNavigate();

	const course = CoursesData.find(
		(course) => course.slug === params.courseSlug
	);

	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path' });
		}
	}, [course, navigate]);

	return (
		<>
			<h1>{course?.title}</h1>
			<h3>{course?.slug}</h3>
			<h3>{course?.id}</h3>
			<NavLink to=".." relative="path" className="allCourses">
				All courses
			</NavLink>
		</>
	);
}

export default SingleCourse;
