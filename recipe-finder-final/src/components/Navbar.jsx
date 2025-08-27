// src/components/Navigation.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
        >
          RecipeFinder
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-700" : "text-orange-600 hover:text-orange-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-700" : "text-orange-600 hover:text-orange-700"
              }`
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-700" : "text-orange-600 hover:text-orange-700"
              }`
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-700" : "text-orange-600 hover:text-orange-700"
              }`
            }
          >
            About
          </NavLink>

          {/* Profile Icon */}
          <button className="text-orange-600 text-3xl hover:text-orange-700 transition-colors">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
