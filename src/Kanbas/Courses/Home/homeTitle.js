import ModuleList from "./homeModuleList";
import {FaEllipsisV} from "react-icons/fa";
import React from "react";
import { FaCheckCircle,
    FaPlus,
} from "react-icons/fa"
function Modules() {
    return (
        <div className="main-container" style={{maxWidth:'90%'}}>
            <br/>
            <Title/>
            <ModuleList />
        </div>
    );

}

const Title = () => {
    return (
        <div class="d-flex mb-2">
            <div class="m-1">
                <button class="btn btn-secondary">Collapse All</button>
            </div>
            <div class="m-1">
                <button class="btn btn-secondary">View Progress</button>
            </div>
            <div class="m-1">
                <button class="btn btn-secondary"><FaCheckCircle style={{marginBottom:'3px'}} /> Publish All</button>
            </div>
            <div class="m-1">
                <button class="btn btn-danger">
                    <FaPlus style={{marginBottom:'3px'}}/> Module
                </button>
            </div>
            <div class="m-1">
                <button class="btn btn-danger">
                    <FaEllipsisV />
                </button>
            </div>
        </div>
    );
};
export default Modules;
