import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-orange-600">404</h1>
        <p className="text-gray-600 mt-4">Page not found</p>
      </div>
       {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
