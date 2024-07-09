import React from 'react';
import {Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import upload from '../assets/images/upload.svg';
import inventory from '../assets/images/inventory.svg';
import reports from '../assets/images/reports.svg';

const DashboardUser = () => {

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <div className="flex flex-col space-y-4">
                    <Link to="/dashboard/upload" className="flex items-center space-x-3">
                        <img src={upload} alt="Subir Productos" className="w-6 h-6" />
                        <span>Upload Products</span>
                    </Link>
                    <Link to="/dashboard/inventory" className="flex items-center space-x-3">
                        <img src={inventory} alt="Inventario" className="w-7 h-7" />
                        <span>Inventory</span>
                    </Link>
                    <Link to="/dashboard/reports" className="flex items-center space-x-3">
                        <img src={reports} alt="Reportes" className="w-6 h-6" />
                        <span>Reports</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardUser;
