import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import {
    FaFileExport,
    FaFileImport,
    FaFilter,
    FaKeyboard,

} from "react-icons/fa";
import {FaGear,
        FaTriangleExclamation,
} from "react-icons/fa6";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div className="mt-2" style={{maxWidth:'90%'}}>
            <Title/>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <th style={{color: 'black'}}>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>

                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td style={{color: 'red'}}>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                    );
                                    return (<td>{grade?.grade ||
                                                 <input type="text"
                                                        placeholder="Input Grade"
                                                        className="form-control "/>}</td>);
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const Title = () => {
    return(
        <div className="wd-top-buttons-container">

            <div className="wd-top-buttons justify-content-end d-flex" style={{marginBottom:'30px',maxWidth:'90%'}}>
                <span className="gradebook-text">Gradebook </span>
                <FaKeyboard style={{marginTop:'5px',marginRight:'100px',color:'red'}}/>
                <button type="button" className="btn wd-switch-buttons">
                    <FaFileImport style={{marginRight:'3px',marginBottom:'3px'}}/>Import
                </button>
                <button type="button" className="btn wd-switch-buttons">
                    <FaFileExport style={{marginRight:'3px',marginBottom:'3px'}}/>Export
                </button>
                <button type="button" className="btn wd-switch-buttons wd-gear-btn">
                    <FaGear/>
                </button>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div className="col-5">
                    <strong>Student Names</strong>
                    <input type="text" className="form-control" placeholder="Search Students"/>
                </div>
                <div className="col-5">
                    <strong>Assignment Names</strong>
                    <input type="text" className="form-control" placeholder="Search Assignments"/>
                </div>
            </div>
            <button type="button" className="btn wd-switch-buttons mb-2">
                <FaFilter/> Apply Filters
            </button>
        </div>
    );
};

export default Grades;
