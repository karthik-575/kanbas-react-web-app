import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css"
import { FaCheckCircle,
    FaPlus,
} from "react-icons/fa"
import {FaEllipsisVertical} from "react-icons/fa6";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="assignment-editor-container">
            <br/>
            <div className="status-container">

                <FaCheckCircle style={{color: 'green'}} /> Published <FaEllipsisVertical/>

            </div>
            <br/>
            <hr/>

            Assignment Name
            <input value={assignment.title} className="form-control mb-2" />

            <hr/>
            <div className="button-container">
            <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger me-3"
            >
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
        </div>
        <hr/>
        </div>
    );
}

export default AssignmentEditor;
