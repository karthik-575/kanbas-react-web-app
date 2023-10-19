import React from "react";

import Title from "../Modules/index";
import "./index.css"
import { FaCheckCircle,
         FaBan,
        FaFileImport,
        FaBullseye,
        FaChartBar,
        FaBell,
} from "react-icons/fa"

function Home() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div className="title-section">
                <Title />
            </div>
            <MenuHeader />
        </div>
    );
}

const MenuHeader = () => {
    return (
        <div className="course-content-section">
            Course Status
            <div style={{ display: 'flex' }}>
                <button type="button" className="btn btn-secondary menu-btn">
                    <FaBan style={{marginRight:'2px',marginBottom:'3px'}}/>
                    Unpublish
                </button>
                <button type="button" className="btn btn-secondary menu-btn" style={{ backgroundColor: 'green' }}>
                    <FaCheckCircle style={{ color: 'white',marginRight: '2px',marginBottom: '5px' }}/>
                    Published
                </button>
            </div>
            <br />
            <button type="button" className="btn btn-secondary menu-btn">
                <FaFileImport style={{marginRight:'3px',marginBottom:'3px'}}/>
                Import Existing Content
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaFileImport style={{marginRight:'3px',marginBottom:'3px'}}/>
                Import From Commons
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaBullseye style={{marginRight:'3px',marginBottom:'3px'}}/>
                Choose Home Page
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaChartBar style={{marginRight:'3px',marginBottom:'3px'}}/>
                View Course Stream
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaBell style={{marginRight:'3px',marginBottom:'3px'}}/>
                New Announcement
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaChartBar style={{marginRight:'3px',marginBottom:'3px'}}/>
                New Analytics
            </button>
            <button type="button" className="btn btn-secondary menu-btn">
                <FaBell style={{marginRight:'3px',marginBottom:'3px'}}/>
                View Course Notifications
            </button>
            <br />
            <br/>
            <h4>To Do</h4>
            <hr className="divider" />
            <span style={{ color: 'red' }}>Grade A1: ENV + HTML</span><br />
            <span style={{ color: 'grey' }}>100 points - Sep 19 at 11:59pm</span><br /><br />
            <h4>Coming Up</h4>
            <hr className="divider" />
            <span style={{ color: 'red' }}>Lecture</span><br />
            <span style={{ color: 'grey' }}>Sep 19 at 11:59pm</span><br /><br />
            <span style={{ color: 'red' }}>CS68686 Section 1829398472749sdad</span><br />
            <span style={{ color: 'grey' }}>Sep 19 at 11:59pm</span><br /><br />
            <span style={{ color: 'red' }}>CS681 Section 29398472749sdad</span><br />
            <span style={{ color: 'grey' }}>Sep 19 at 11:59pm</span>
        </div>
    );
};

export default Home;
