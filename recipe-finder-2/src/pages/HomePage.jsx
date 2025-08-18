import React from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-orange-50 min-h-screen font-sans flex flex-col">
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Discover Delicious Recipes for Every Occasion
          </h2>
          <div className="flex justify-center items-center max-w-xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="w-full px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none"
            />
            <button className="bg-orange-500 p-3 rounded-r-lg text-white hover:bg-orange-600">
              <FiSearch size={20} />
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600">
              Get Started
            </button>
            <button className="bg-gray-100 text-gray-500 px-6 py-3 rounded-lg shadow">
              Browse Recipes
            </button>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Featured Recipes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Recipe cards here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
