import React from 'react';
import { Link } from 'react-router-dom';
import upload from '../assets/images/upload.svg'; // Update the path to your actual icon
import inventory from '../assets/images/inventory.svg'; // Update the path to your actual icon
import reports from '../assets/images/reports.svg'; // Update the path to your actual icon
import sales from '../assets/images/sales.png'

const DashboardSideMenu = () => {

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <Link to="/dashboard">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        </Link>
        <div className="flex flex-col space-y-4">
            <Link to="/upload" className="flex items-center space-x-3">
                <img src={upload} alt="Subir Productos" className="w-6 h-6" />
                <span>Upload Products</span>
            </Link>
            <Link 
                to="/inventory" 
                className="flex items-center space-x-3"
            >
                <img src={inventory} alt="Inventario" className="w-7 h-7" />
                <span>Inventory</span>
            </Link>
            <Link to="/reports" className="flex items-center space-x-3">
                <img src={reports} alt="Reportes" className="w-6 h-6" />
                <span>Reports</span>
            </Link>
            <Link to="/sales" className="flex items-center space-x-3">
                <img src={sales} alt="Reportes" className="w-6 h-6" />
                <span>Sales</span>
            </Link>
        </div>
    </div>
    )
}

export default DashboardSideMenu;