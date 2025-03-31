import React, { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      alert(message); // Notify the user of success
    } else {
      alert(message); // Notify the user of failure
    }
  };

  const EditProductModal = ({ product }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const handleUpdateProduct = async (pid) => {
      const updatedProduct = { name, price }; // Create updated product object
      const { success, message } = await updateProduct(pid, updatedProduct);
      if (success) {
        alert(message); // Notify the user of success
        setIsModalOpen(false); // Close the modal
      } else {
        alert(message); // Notify the user of failure
      }
    };

    return (
      <div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative animate-fade-in-scale">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Edit Product</h2>
                <p className="text-gray-500 text-sm">Make changes to your product details</p>
              </div>

              {/* Name Input */}
              <label className="block mb-2 font-medium text-gray-700">Product Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Price Input */}
              <label className="block mb-2 font-medium text-gray-700">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdateProduct(product._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`border border-gray-300 rounded-lg p-4 shadow-md bg-white transition-transform duration-300 ${
        isModalOpen ? "" : "hover:shadow-lg hover:scale-105"
      }`}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-48 object-cover rounded mb-4"
        />
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
        </span>
      </div>

      {/* Product Details */}
      <h1 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h1>
      <p className="text-gray-700 mb-4">${product.price}</p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Edit Product
        </button>
        <button
          onClick={() => handleDeleteProduct(product._id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          DELETE
        </button>
      </div>

      {/* Modal */}
      <EditProductModal product={product} />
    </div>
  );
};

export default ProductCard;