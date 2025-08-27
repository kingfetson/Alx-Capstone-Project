import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h2 className="font-extrabold text-2xl">RecipeFinder</h2>
          <p className="text-sm mt-3 opacity-90 max-w-sm mx-auto md:mx-0">
            Discover, cook, and enjoy delicious recipes for every occasion. Your
            go-to kitchen companion.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className="hover:text-yellow-200 transition-colors"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-yellow-200 transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-200 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-white opacity-80 mt-10 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} RecipeFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
