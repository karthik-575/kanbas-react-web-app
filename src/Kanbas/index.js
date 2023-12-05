import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const [course, setCourse] = useState({
                                             name: "New Course",
                                             number: "New Number",
                                             startDate: "2023-09-10",
                                             endDate: "2023-12-15",
                                             department: "new Department",
                                             credits: 3,
                                         });
    const [courses, setCourses] = useState([]);
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
                       response.data,
                       ...courses,
                   ]);
    };

    const deleteCourse = async (course) => {
        await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter((c) => c._id !== course._id));
    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                }
                return c;
            })
        );
        setCourse(course);
    };

    useEffect(() => {
        findAllCourses();
    }, []);
    return (
        <Provider store={store}>

        <div className="d-flex">
            <KanbasNavigation/>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard  courses={courses}
                                                             course={course}
                                                             setCourse={setCourse}
                                                             addNewCourse={addNewCourse}
                                                             deleteCourse={deleteCourse}
                                                             updateCourse={updateCourse}/>} />
                <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                <Route
                    path="Courses"
                    element={
                        <div>
                            <h1>Courses</h1>
                            <p>Please navigate to a course from the Dashboard </p>
                        </div>
                    }/>
            </Routes>
        </div>
        </Provider>
    );
}
export default Kanbas;