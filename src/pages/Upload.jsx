import DashboardSideMenu from "./DashboardSideMenu";
import {React} from "react";
import FileUpload from '../utilities/fileupload';

const Upload = () => {

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-6">Upload Product CSV</h2>
                <FileUpload />
            </div>
        </div>
    );
}

export default Upload;