import DashboardSideMenu from "./DashboardSideMenu";
import { React, useState, useEffect } from "react";
import { getData, postData } from '../components/ApiCalls';
import { ProductApis } from "../authConfig";

export class Product {
    ProductID = "";
    ProductName = "";
    ProductDescription = "";
    ProductPrice = "";
    ProductDiscount = "";
    ProductImageName = "";
    isDeleted = "";
    UpdatedAt = "";
        
}

const Inventory = () => {
   
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: '', price: '' });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getData(ProductApis.GetProducts);

            setProducts(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = async (e) => {
        
        const { value } = e.target;
        setForm(value);
    };

    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();
        if (editing) {

            await updateProduct(e.target);
        } else {
            await addProduct();
        }
        setForm({ id: null, name: '', price: '' });
    };

    const addProduct = async (data) => {
        try {
            
            const response = await postData(data);
            setProducts([...products, response]);

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProduct = async (target) => {
        try {
            debugger

           var product = new Product(target);
           const response = await postData(ProductApis.UpdateProduct, product);
           setForm(...target, response)
            setEditing(false);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleEdit = (product) => {
        debugger
        setForm(product);
        setEditing(true);
    };

    const handleDelete = async (product) => {
        try {
            
            const response = await postData(ProductApis.DeleteProduct, product);
            setProducts(response);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <DashboardSideMenu></DashboardSideMenu>

            {/* Main Content */}
            <div className="flex-1 p-6">

                <h2 className="text-2xl font-bold mb-6">Inventory Table</h2>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Product Management</h1>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={form.ProductName}
                                onChange={handleInputChange}
                                placeholder="Product Name"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={form.ProductPrice}
                                onChange={handleInputChange}
                                placeholder="Product Price"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="description"
                                value={form.ProductDescription}
                                onChange={handleInputChange}
                                placeholder="Product Description"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="number"
                                name="discount"
                                value={form.ProductDiscount}
                                onChange={handleInputChange}
                                placeholder="Product Discount"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                value={form.ProductQuantity}
                                onChange={handleInputChange}
                                placeholder="Product Quantity"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="imageName"
                                value={form.ProductImageName}
                                onChange={handleInputChange}
                                placeholder="Product Image Name"
                                className="p-2 border rounded"
                                required
                            />
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                                {editing ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </form>
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
                            {products.map((product) => (
                                <tr key={product.ProductID}>
                                    <img src={require(`../assets/images/${product.ProductImageName}`)} alt={product.ProductImageName} className="w-16 h-16 object-cover" />
            
                                    <td className="py-2 px-4 border-b">{product.ProductName}</td>
                                    <td className="py-2 px-4 border-b">{product.ProductPrice}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleEdit(product)}
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Inventory;