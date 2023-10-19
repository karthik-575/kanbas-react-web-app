import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaBookOpen } from "react-icons/fa"; // import necessary icons
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="module-list">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="module-item">

                            <div className="module-info">
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>

                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;
