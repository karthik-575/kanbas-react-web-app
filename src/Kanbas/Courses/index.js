import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <Title course={course}/>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId"
                               element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

const Title = ({ course }) => {
    const { pathname } = useLocation();
    const pathParts = pathname.split("/");
    const lastPart = pathParts[pathParts.length - 1];
    const formattedLastPart = lastPart.replace(/([a-z])([A-Z])/g, "$1 $2");

    return (
        <div className="kanbas-course-header">
            <nav className="kanbas-course-breadcrumb">
                <ol className="breadcrumb kanbas-breadcrumbs">
                    <li className="breadcrumb-item">
                        <Link
                            to={`/Kanbas/Courses/${course._id}/Home`}
                            className="kanbas-course-header-link"
                        >
                            <FaBars className="course-icon" style={{marginRight:'5px',marginBottom:'4px'}} /> {course.number}

                        </Link>

                    </li>
                    <li className="breadcrumb-item active">{formattedLastPart}</li>
                </ol>
            </nav>
            <div className="kanbas-course-header-divider">
                <hr />
            </div>
        </div>
    );
};
export default Courses;