import React, { useState } from 'react';

const CreateStore = () => {
   
    const [formData, setFormData] = useState({
        storeID: '',
        field1: '',
        field2: '',
        field3: '',
        field4: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
       
    };

    return (
        <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-md shadow-md">
           
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="storeID" className="block text-gray-700">Store Name:</label>
                    <input
                        type="text"
                        id="storeID"
                        name="storeID"
                        value={formData.StoreName}
                        onChange={handleChange}
                        placeholder="Enter Store Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field1" className="block text-gray-700">Store Owner:</label>
                    <input
                        type="text"
                        id="field1"
                        name="field1"
                        value={formData.field1}
                        onChange={handleChange}
                        placeholder="Enter Owner Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field2" className="block text-gray-700">Enter Branch Name. If Multiple Branches. 
                        Use: Branch 1, Branch 2...</label>
                    <input
                        type="text"
                        id="field2"
                        name="field2"
                        value={formData.field2}
                        onChange={handleChange}
                        placeholder="Enter Branch Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                
                
                <button type="submit" className='bg-green-500 text-white p-2 rounded mr-2'>
                    <h2>Create New Store</h2>
                </button>
            </form>
        </div>
    );
};

export default CreateStore;
