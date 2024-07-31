import React, { useState } from 'react';
import DashboardSideMenu from './DashboardSideMenu';
const Reports = () => {
    const [activeView, setActiveView] = useState('');
    

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">
                
                <h2 className="text-2xl font-bold mb-6">Reports</h2>
                <p>Reports View</p>
                  
            </div>
        </div>
    );
}

export default Reports;