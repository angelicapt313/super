import React, { useState } from 'react';
import postWithAuth from '../quickStoreDashboard/AdminApiCalls';

export class User {
    DisplayName = "";
    MailNickname = "";
    UserPrincipalName = "";
    Password = "";
}
const CreateUser = () => {
   
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        var user = new User();
        user.DisplayName = formData.userName;
        user.MailNickname = formData.userEmail;
        user.UserPrincipalName = formData.userEmail;
        user.Password = "";

        var result = await postWithAuth(process.env.REACT_APP_createUser, user);

        
        //console.log('Result:', result);
        //console.log('Form Data:', formData);
       
    };

    return (
        <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-md shadow-md">
           
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="storeID" className="block text-gray-700">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.UserName}
                        onChange={handleChange}
                        placeholder="Enter User Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="field1" className="block text-gray-700">User Email:</label>
                    <input
                        type="text"
                        id="userEmail"
                        name="userEmail"
                        value={formData.UserEmail}
                        onChange={handleChange}
                        placeholder="Enter User Email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
               
                <button type="submit" className='bg-green-500 text-white p-2 rounded mr-2'>
                    <h2>Create New User</h2>
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
