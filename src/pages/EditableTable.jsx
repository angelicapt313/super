import React, { useState } from 'react';
import Pagination from '../utilities/pagination';
import NotificationService from '../services/NotificationService';

const EditableTable = ({ products, setProducts }) => {
  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({ ProductName: '', ProductPrice: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
   
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  const handleEditClick = (product) => {
    setEditRowId(product.ProductID);
    setFormData({ ProductName: product.ProductName, ProductPrice: product.ProductPrice });
  };

  const handleSaveClick = (id) => {
    setProducts(products.map(product => (product.ProductID === id ? { ...product, ...formData } : product)));
    setEditRowId(null);
    setFormData({ ProductName: '', ProductPrice: '' });
    openModal("Data Saved Succesfully");
  };

  const handleCancelClick = () => {
    setEditRowId(null);
    setFormData({ ProductName: '', ProductPrice: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.ProductID !== id));
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
         <NotificationService isOpen={isModalOpen} onClose={closeModal} children={"Data Being Send From Parent"}></NotificationService>
           
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.ProductID}>
              <td className="py-2 px-4 border-b">
                <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">
                {editRowId === product.ProductID ? (
                  <input
                    type="text"
                    name="ProductName"
                    value={formData.ProductName}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border"
                  />
                ) : (
                  product.ProductName
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editRowId === product.ProductID ? (
                  <input
                    type="number"
                    name="ProductPrice"
                    value={formData.ProductPrice}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border"
                  />
                ) : (
                  product.ProductPrice
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editRowId === product.ProductID ? (
                  <>
                    <button
                      onClick={() => handleSaveClick(product.ProductID)}
                      className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700 mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="px-2 py-1 text-white bg-gray-500 rounded hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(product)}
                      className="bg-yellow-500 text-white p-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.ProductID)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default EditableTable;
