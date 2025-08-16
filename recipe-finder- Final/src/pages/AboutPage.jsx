import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600">About Us</h2>
        <p className="text-gray-600 mt-4">
          RecipeFinder is your go-to platform for discovering, sharing, and enjoying recipes from around the world. 
          Our mission is to make cooking fun, easy, and accessible for everyone.
        </p>
      </div>
       {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
