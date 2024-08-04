import React from 'react';
import DashboardSideMenu from './DashboardSideMenu';

const Reports = () => {

    const [activeView, setActiveView] = useState('');
    const [selectedReport, setSelectedReport] = useState('');

    const handleSelectionChange = (e) => {
        setSelectedReport(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para generación de reporte
        console.log(selectedReport);
    }



    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">

                <h2 className="text-2xl font-bold mb-6">Reports</h2>

                <div className="flex justify-center items-start  my-2">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">Generar Reporte</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
                                    Seleccione el tipo de reporte
                                </label>
                                <select
                                    id="reportType"
                                    value={selectedReport}
                                    onChange={handleSelectionChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="inventary">Inventario</option>
                                    <option value="totalSales">Total Ventas</option>
                                </select>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Generar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;