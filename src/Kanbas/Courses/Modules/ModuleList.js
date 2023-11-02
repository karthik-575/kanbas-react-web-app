import { React } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input
                                className="form-control m-1"
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col">
                            <input
                                className="form-control m-1"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(
                                        setModule({ ...module, description: e.target.value })
                                    )
                                }
                            />
                        </div>
                        <div className="col">
                            <button
                                className="m-1 btn btn-secondary add-btn"
                                onClick={() =>
                                    dispatch(addModule({ ...module, course: courseId }))
                                }
                            >
                                Add
                            </button>
                            <button
                                className="m-1 btn btn-secondary update-btn"
                                onClick={() => dispatch(updateModule(module))}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </li>

                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div className="row">
                                <div className="col col-4">
                                    <h5>{module.name}</h5>
                                </div>
                                <div className="col col-4">
                                    <p>{module.description}</p>
                                </div>
                                <div className="col col-4 d-flex justify-content-end">

                                    <button
                                        className="m-1 btn btn-secondary editMod-btn"
                                        onClick={() => dispatch(setModule(module))}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="m-1 btn btn-secondary delete-btn"
                                        onClick={() => dispatch(deleteModule(module._id))}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className="col"></div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ModuleList;
