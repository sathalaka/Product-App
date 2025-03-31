import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const { createProduct } = useProductStore();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAddProduct = async (e) => {
        e.preventDefault(); // Prevent page refresh
        const { success, message } = await createProduct(newProduct);

        if (success) {
            alert(message); // Notify the user of success
            setNewProduct({ name: "", price: "", image: "" }); // Reset the form
            navigate("/"); // Redirect to the homepage
        } else {
            alert(message); // Notify the user of failure
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Create New Product</h1>
                <form onSubmit={handleAddProduct} className="space-y-4">
                    {/* Product Name Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Product Name</label>
                        <input
                            placeholder="Enter product name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Price</label>
                        <input
                            placeholder="Enter price"
                            name="price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                        <input
                            placeholder="Enter image URL"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;
