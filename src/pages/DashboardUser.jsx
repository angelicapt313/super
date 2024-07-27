import React, { useState } from 'react';
import DashboardSideMenu from './DashboardSideMenu';
import Charts from './Charts';

const DashboardUser = () => {

    return (
        <div className="flex min-h-screen">
          
            <DashboardSideMenu></DashboardSideMenu>

            <div className="container mx-auto p-4">
     
            <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-6">Main Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {<Charts></Charts>}
                {<Charts></Charts>}
                {<Charts></Charts>}
            </div>
              
            </div>
            </div>
        </div>
    );
};

export default DashboardUser;
