import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./homeTitle.css";

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
