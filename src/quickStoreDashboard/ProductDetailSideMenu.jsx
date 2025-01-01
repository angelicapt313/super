import React from "react";


const ProductDetailSideMenu = ({ sale, onClose }) => {


    const objSale = JSON.parse(sale.ProductList);
    console.log(sale);
    console.log(objSale);

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
            <div className="w-1/2 h-full bg-gray-100 rounded-l-lg p-5 shadow-[inset_-8px_-8px_15px_#ffffff,inset_8px_8px_15px_rgba(0,0,0,0.15)]">
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={onClose}>
                    ✖
                </button>
                <h2 className="text-lg font-bold mb-4">Detalles del Producto</h2>
                {/* Detalles del producto aquí */}
                <p className="py-2 px-4 ">{sale.TransactionsID}</p>
                <p className="py-2 px-4 ">{sale.UserName}</p>
                <p className="py-2 px-4 border-b border-t font-bold">Items</p>
                <p className="border-b"></p>


                <table className="min-w-full border-collapse ">
                    <tbody>
                        {objSale.map((prod, index) => (
                            <React.Fragment key={prod.ProductID || index}>
                                {/* Productos comprados */}

                                <tr className="cursor-pointer hover:bg-gray-200">
                                    <td className="p-2 ">
                                        <img src="https://www.svgrepo.com/show/210636/brackets.svg" className="w-6 inline m-1" />
                                        <p className="inline">{prod.ProductName}</p>
                                    </td>

                                    <td className="p-2 ">${prod.Price}</td>
                                </tr>

                                {/* <tr className="bg-gray-50">
                                    <td className="p-2" colSpan="3">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-semibold">Created at</p>
                                                <p className="text-sm text-gray-500">{prod.CreatedAt}</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Delivery Services</p>
                                                <p className="text-sm text-gray-500">Express</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Payment method</p>
                                                <p className="text-sm text-gray-500">Bank Transfer</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Status</p>
                                                <p className="text-sm text-gray-500">Processed</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr> */}

                            </React.Fragment>
                        ))}

                        <tr className="bg-gray-50">
                            <td className="p-2" colSpan="3">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold">Created at</p>
                                        <p className="text-sm text-gray-500">{objSale[0].CreatedAt}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Delivery Services</p>
                                        <p className="text-sm text-gray-500">Express</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Payment method</p>
                                        <p className="text-sm text-gray-500">Bank Transfer</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Status</p>
                                        <p className="text-sm text-gray-500">Processed</p>
                                    </div>
                                </div>
                            </td>
                        </tr>


                    </tbody>

                </table>



                <p className="border-b"></p>
            </div>
        </div>
    );
}



export default ProductDetailSideMenu;