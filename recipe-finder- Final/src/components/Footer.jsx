import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-orange-600 font-bold text-xl">RecipeFinder</h2>
          <p className="text-sm mt-2">
            Discover, cook, and enjoy delicious recipes for every occasion.  
            Your go-to kitchen companion.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/recipes" className="hover:text-orange-600">Recipes</Link></li>
            <li><Link to="/categories" className="hover:text-orange-600">Categories</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-600">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-600">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} RecipeFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
