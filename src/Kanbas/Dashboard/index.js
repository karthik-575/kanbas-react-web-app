import db from "../Database";
import "./index.css"
import {Link} from "react-router-dom";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <h3>Published Courses(3)</h3>
            <hr/>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
}
const CourseCard = ({ course }) => {
    return (
        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="card kanbas-card">
                <div className="kanbas-card-img card-img-top"></div>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">
                        {course.number} <br />
                        {course.startDate} to {course.endDate}
                    </p>
                </div>
            </div>
        </Link>
    );
};
export default Dashboard;
