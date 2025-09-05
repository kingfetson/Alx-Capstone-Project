import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer stays at bottom */}
      <Footer />
    </Router>
  );
}

export default App;
