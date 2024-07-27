import DashboardSideMenu from "./DashboardSideMenu";
import {React, useState} from "react";

const Inventory = () => {

    const [activeView, setActiveView] = useState('');

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">
                
                        <h2 className="text-2xl font-bold mb-6">Inventory Table</h2>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Product Name</th>
                                    <th className="py-2 px-4 border-b">Category</th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Stock</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">Product 1</td>
                                    <td className="py-2 px-4 border-b">Category 1</td>
                                    <td className="py-2 px-4 border-b">$10.00</td>
                                    <td className="py-2 px-4 border-b">100</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">Product 2</td>
                                    <td className="py-2 px-4 border-b">Category 2</td>
                                    <td className="py-2 px-4 border-b">$20.00</td>
                                    <td className="py-2 px-4 border-b">50</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
            </div>
        </div>
    );
}

export default Inventory;