import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
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
    );
}
export default Kanbas;