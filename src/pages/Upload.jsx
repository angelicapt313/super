import DashboardSideMenu from "./DashboardSideMenu";
import {React, useState} from "react";

const Upload = () => {

    const [activeView, setActiveView] = useState('');

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">
                
                <h2 className="text-2xl font-bold mb-6">Upload</h2>
                <p>Upload View</p>
                  
            </div>
        </div>
    );
}

export default Upload;