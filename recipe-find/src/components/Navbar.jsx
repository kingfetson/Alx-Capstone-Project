// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-orange-100 shadow-sm">
      <Link to="/" className="text-orange-600 font-bold text-xl">
        RecipeFinder
      </Link>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
        <li><Link to="/recipes" className="hover:text-orange-600">Recipes</Link></li>
        <li><Link to="/categories" className="hover:text-orange-600">Categories</Link></li>
        <li><Link to="/about" className="hover:text-orange-600">About Us</Link></li>
      </ul>
      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-orange-600">
          <FiSearch size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </nav>
  );
};

export default Navbar;
