import DashboardSideMenu from "./DashboardSideMenu";
import { React, useState, useEffect } from "react";
import { getData, postData } from '../components/ApiCalls';

const Inventory = () => {
   
    const [activeView, setActiveView] = useState('');
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: null, name: '', price: '' });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getData();
            
            setProducts(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await updateProduct();
        } else {
            await addProduct();
        }
        setForm({ id: null, name: '', price: '' });
    };

    const addProduct = async () => {
        try {
            const response = await postData( {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const newProduct = await response.json();
            setProducts([...products, newProduct]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProduct = async () => {
        try {
            const response = await getData(`${form.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const updatedProduct = await response.json();
            setProducts(products.map((product) => (product.ProductID === form.id ? updatedProduct : product)));
            setEditing(false);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleEdit = (product) => {
        setForm(product);
        setEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${id}`, { method: 'DELETE' });
            setProducts(products.filter((product) => product.id !== id));
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
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Product Name"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleInputChange}
                                placeholder="Product Price"
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