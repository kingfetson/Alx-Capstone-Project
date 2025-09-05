// src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaUtensils } from "react-icons/fa";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Load login state from localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Save new user in localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      setIsLoggedIn(true);
      setShowForm(false);
      setMenuOpen(false);
    } else {
      // Check if user exists in localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setIsLoggedIn(true);
        setShowForm(false);
        setMenuOpen(false);
      } else {
        alert("Invalid email or password");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-orange shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-orange-600 hover:text-orange-800 transition-colors flex items-center gap-2"
          >
            <FaUtensils className="text-3xl" />
            RecipeFinder
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-orange-800 ${
                  isActive ? "text-orange-700" : "text-orange-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-orange-800 ${
                  isActive ? "text-orange-700" : "text-orange-600"
                }`
              }
            >
              Recipes
            </NavLink>

            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-orange-800 ${
                  isActive ? "text-orange-700" : "text-orange-600"
                }`
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-orange-800 ${
                  isActive ? "text-orange-700" : "text-orange-600"
                }`
              }
            >
              About
            </NavLink>

            {/* Profile Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-orange-600 text-3xl hover:text-orange-800 transition-colors"
              >
                <FaUserCircle />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsSignup(false);
                          setShowForm(true);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => {
                          setIsSignup(true);
                          setShowForm(true);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login/Signup Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              {isSignup ? "Sign Up" : "Login"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
