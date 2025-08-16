import React from "react";
import Footer from "../components/Footer";


const About = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          About RecipeFinder
        </h1>

        <p className="text-gray-700 text-center mb-8">
          Welcome to RecipeFinder, your ultimate destination for discovering and exploring delicious recipes from around the world.
          Our mission is to make cooking enjoyable and accessible for everyone, whether you're a seasoned chef or just starting your culinary journey.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            We believe that great food brings people together. Our platform is designed to help you easily find recipes that fit your
            taste, dietary needs, and cooking skill level. We strive to provide a diverse collection of recipes, from quick weeknight
            meals to elaborate festive dishes, ensuring there's always something new to try.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h2>
          <p className="text-gray-700">
            RecipeFinder offers an intuitive search experience, robust filtering options, and a user-friendly interface to browse recipes
            by cuisine, dietary preference, difficulty, and more. You can save your favorite recipes, create meal plans, and share your
            culinary creations with our growing community.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-700">info@recipefinder.com</p>
          <p className="text-gray-700">+1 (123) 456-7890</p>
          <p className="text-gray-700">123 Culinary Lane, Foodville, FV 98765</p>
        </section>
      </div>
    </div>
  );
};

export default About;
