import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./index.css";

function Dashboard({
                       courses,
                       course,
                       setCourse,
                       addNewCourse,
                       deleteCourse,
                       updateCourse,
                   }) {

    const [editMode, setEditMode] = useState(false);

    return editMode ? (

        <EditDashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
            setEditMode={setEditMode}
        />
    ) : (

               <div className="container-fluid">
                   <h1>Dashboard</h1>
                   <hr/>
                   <h3>Published Courses ({courses.length})</h3>
                   <hr/>
                   <div className="row justify-content-end mb-3 ">
                       <div className="col-md-auto">
                   <button className=" m-1 btn btn-secondary edit-btn"
                           onClick={() => setEditMode(true)}>Edit
                   </button>
                       </div>
                   </div>
                   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                       {courses.map((course) => (
                           <CourseCard key={course._id} course={course}/>
                       ))}
                   </div>
               </div>
           );
}

const CourseCard = ({course}) => {
    return (
        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="card kanbas-card">
                <div className="kanbas-card-img card-img-top"></div>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">
                        {course.number} <br/>
                        {course.startDate} to {course.endDate}
                    </p>
                </div>
            </div>
        </Link>
    );
};

function EditDashboard({
                           courses,
                           course,
                           setCourse,
                           addNewCourse,
                           deleteCourse,
                           updateCourse,
                           setEditMode,
                       }) {
    const handleSave = () => {
        setEditMode(false);
    };
    return (

        <div className="container-fluid">
            <h1>Dashboard</h1>
            <div className="mt-4 mb-4">
                <div className="row">
                    <div className="col">
                        <button className="m-1 btn btn-secondary add-btn" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="m-1 btn btn-secondary update-btn" onClick={updateCourse}>
                            Update
                        </button>
                    </div>
                    <div className="col">
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) => setCourse({...course, name: e.target.value})}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) => setCourse({...course, number: e.target.value})}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({...course, startDate: e.target.value})
                            }
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({...course, endDate: e.target.value})
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="row row-cols-lg-3 g-3">
                {courses.map((courseItem) => (
                    <div className="col-lg-4" key={courseItem._id}>

                        <EditCourseCard

                            course={courseItem}
                            setCourse={setCourse}
                            deleteCourse={deleteCourse}
                        />
                    </div>
                ))}
            </div>
            <div className="row justify-content-center mt-5 mb-3 ">
                <div className="col-md-auto">
            <button className="btn btn-secondary save-btn" onClick={handleSave}>Save</button>
                </div>

            </div>
        </div>
    );
}

function EditCourseCard({course, setCourse, deleteCourse}) {
    return (
        <div>
            <Link to={`/Kanbas/Courses/${course._id}`}>
                <div className="card kanbas-card">
                    <div className="kanbas-card-img card-img-top"></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-8">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">
                                    {course.number} <br/>
                                    {course.startDate} to {course.endDate}
                                </p>
                            </div>
                            <div className="col col-2">
                                <button
                                    className="btn btn-secondary deleteKKR-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    className="mt-2 btn btn-secondary editKKR-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Dashboard;

/*import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Dashboard({
                       courses,
                       course,
                       setCourse,
                       addNewCourse,
                       deleteCourse,
                       updateCourse,
                   }) {
    return (
        <div className="container-fluid">
            <h1>Dashboard</h1>
            <div className="mt-4 mb-4">
                <div className="row">
                    <div className="col">
                        <button className="m-1 btn btn-secondary add-btn" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="m-1 btn btn-secondary update-btn" onClick={updateCourse}>
                            Update
                        </button>
                    </div>
                    <div className="col">
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({ ...course, startDate: e.target.value })
                            }
                        />
                    </div>
                    <div className="col">
                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({ ...course, endDate: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="row row-cols-lg-3 g-3">
                {courses.map((courseItem) => (
                    <div className="col-lg-4" key={courseItem._id}>

                    <CourseCard

                        course={courseItem}
                        setCourse={setCourse}
                        deleteCourse={deleteCourse}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}

function CourseCard({ course, setCourse, deleteCourse }) {
    return (
        <div>
            <Link to={`/Kanbas/Courses/${course._id}`}>
                <div className="card kanbas-card">
                    <div className="kanbas-card-img card-img-top"></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-8">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text">
                                    {course.number} <br />
                                    {course.startDate} to {course.endDate}
                                </p>
                            </div>
                            <div className="col col-2">
                                <button
                                    className="btn btn-secondary delete-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    className="mt-2 btn btn-secondary edit-btn"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Dashboard;*/

