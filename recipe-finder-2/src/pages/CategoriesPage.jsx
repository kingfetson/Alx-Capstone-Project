import React from "react";
import Footer from "../components/Footer";


const categories = [
  { name: "Italian", image: "https://via.placeholder.com/200" },
  { name: "Mexican", image: "https://via.placeholder.com/200" },
  { name: "Asian", image: "https://via.placeholder.com/200" },
  { name: "Indian", image: "https://via.placeholder.com/200" },
  { name: "Mediterranean", image: "https://via.placeholder.com/200" },
  { name: "Desserts", image: "https://via.placeholder.com/200" },
  { name: "Breakfast", image: "https://via.placeholder.com/200" },
  { name: "Soups", image: "https://via.placeholder.com/200" },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6 flex">
      {/* Sidebar Filters */}
      <div className="w-1/4 bg-orange-100 rounded-2xl p-6 mr-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Cuisine</h2>
        {["Italian", "Mexican", "Asian", "Indian", "Mediterranean"].map((cuisine) => (
          <label key={cuisine} className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> {cuisine}
          </label>
        ))}

        <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">Dietary Preferences</h2>
        {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"].map((diet) => (
          <label key={diet} className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> {diet}
          </label>
        ))}

        <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">Difficulty</h2>
        {["Easy", "Medium", "Hard"].map((level) => (
          <label key={level} className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> {level}
          </label>
        ))}
      </div>

      {/* Categories List */}
      <div className="flex-1">
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search categories..."
            className="flex-1 rounded-full border px-4 py-2 mr-4"
          />
          <select className="rounded-full border px-4 py-2">
            <option>Sort by: Alphabetical</option>
            <option>Sort by: Popularity</option>
          </select>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
                {/* Orange overlay */}
                <div className="absolute inset-0 bg-orange-500/30 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
