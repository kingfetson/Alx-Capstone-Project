// src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaUtensils } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false); // mobile nav
  const [menuOpen, setMenuOpen] = useState(false); // profile dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Check localStorage for user
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  // Handle input
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      localStorage.setItem("user", JSON.stringify(formData));
      setIsLoggedIn(true);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid credentials");
        return;
      }
    }
    setShowForm(false);
    setFormData({ email: "", password: "" });
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    setMenuOpen(false);
  };

  // Mobile menu container animation
  const menuVariants = {
    hidden: { y: -20, opacity: 0, height: 0 },
    visible: {
      y: 0,
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { y: -20, opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  // Individual link animation
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-1 justify-between">
            <div className="flex gap-8">
              {["/", "/recipes", "/categories", "/about"].map((path, i) => {
                const labels = ["Home", "Recipes", "Categories", "About"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `font-medium transition-colors hover:text-orange-800 ${
                        isActive ? "text-orange-700" : "text-orange-600"
                      }`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                );
              })}
            </div>

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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-600"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-orange-600"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-600"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Menu with Slide + Staggered Links */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden overflow-hidden w-full bg-black shadow-md border-t z-40"
            >
              <motion.div
                className="flex flex-col items-center gap-6 py-4"
                variants={menuVariants}
              >
                {["/", "/recipes", "/categories", "/about"].map((path, i) => {
                  const labels = ["Home", "Recipes", "Categories", "About"];
                  return (
                    <motion.div key={path} variants={linkVariants}>
                      <NavLink
                        to={path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `font-medium transition-colors hover:text-orange-800 ${
                            isActive ? "text-orange-700" : "text-orange-600"
                          }`
                        }
                      >
                        {labels[i]}
                      </NavLink>
                    </motion.div>
                  );
                })}

                {/* Profile Icon in mobile */}
                <motion.div variants={linkVariants}>
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-orange-600 text-3xl hover:text-orange-800 transition-colors"
                  >
                    <FaUserCircle />
                  </button>
                  {menuOpen && (
                    <div className="mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
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
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
