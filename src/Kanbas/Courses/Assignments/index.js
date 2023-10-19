import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div className="container">
            <br />
            <div className="header-container">
                <input className="search-bar" placeholder="Search for Assignment" type="text" />
                <div className="btn-container">
                    <button className="btn btn-group">+ Group</button>
                    <button className="btn btn-assignment">+ Assignment</button>
                </div>
            </div>
            <div className="title-row">
                Assignments for course {courseId}
            </div>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item assignment-list-item">
                        <div>
                            <div className="assignment-title">{assignment.title}</div>
                            <div className="assignment-description">Week x - Description - Due date</div>
                        </div>
                        <div className="assignment-point">100 pts</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
