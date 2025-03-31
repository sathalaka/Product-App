import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Import FontAwesome Plus Icon

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition duration-200"
        >
          Product<span className="text-yellow-300">Store</span>
        </a>

        {/* Navigation Links */}
        <div>
          <a
            href="/create"
            className="flex items-center bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300"
          >
            <FaPlus className="mr-2" /> {/* Plus Icon */}
            Create
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;