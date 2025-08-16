import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RecipesPage = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-orange-600">All Recipes</h2>
        <p className="text-gray-600 mt-4">Browse through our collection of delicious recipes.</p>
      </div>
       {/* Footer */}
      <Footer />
    </div>
  );
};

export default RecipesPage;
