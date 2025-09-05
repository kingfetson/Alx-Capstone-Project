import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);

  // Fetch recipes from API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await res.json();

        // Fake difficulty assignment
        const mealsWithDifficulty = (data.meals || []).map((meal) => {
          let diff = "Easy";
          if (meal.strMeal.length > 15) diff = "Medium";
          if (meal.strMeal.length > 25) diff = "Hard";
          return { ...meal, difficulty: diff };
        });

        setRecipes(mealsWithDifficulty);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // Handle Cuisine filter change
  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  // Handle Difficulty filter change
  const toggleDifficulty = (level) => {
    setSelectedDifficulties((prev) =>
      prev.includes(level) ? prev.filter((d) => d !== level) : [...prev, level]
    );
  };

  // Apply filters
  const filteredRecipes = recipes.filter((recipe) => {
    const cuisineMatch =
      selectedCuisines.length === 0 ||
      selectedCuisines.includes(recipe.strArea);
    const difficultyMatch =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(recipe.difficulty);
    return cuisineMatch && difficultyMatch;
  });

  return (
    <div className="bg-orange-50 min-h-screen font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-200 p-6">
        <h2 className="font-bold text-lg mb-4">Cuisine</h2>
        <ul className="space-y-2 text-gray-700">
          {["Italian", "Mexican", "Asian", "Indian", "Mediterranean"].map(
            (cuisine) => (
              <li key={cuisine}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={() => toggleCuisine(cuisine)}
                  />
                  <span>{cuisine}</span>
                </label>
              </li>
            )
          )}
        </ul>

        <h2 className="font-bold text-lg mt-6 mb-4">Difficulty</h2>
        <ul className="space-y-2 text-gray-700">
          {["Easy", "Medium", "Hard"].map((level) => (
            <li key={level}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedDifficulties.includes(level)}
                  onChange={() => toggleDifficulty(level)}
                />
                <span>{level}</span>
              </label>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Recipes Grid */}
      <main className="flex-1 p-6 bg-black">
        {loading ? (
          <p className="text-center text-gray-600">Loading recipes...</p>
        ) : filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-orange rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-1">
                  <h3 className="font-semibold text-gray-200 text-lg mb-2">
                    {recipe.strMeal}
                  </h3>
                  <div className="flex items-left text-orange-500 text-sm mb-1">
                    <Star size={14} className="fill-orange-500" />
                    <span className="ml-1">4.5</span>
                    <span className="ml-3 text-xs text-gray-600">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm line-clamp-3">
                    {recipe.strInstructions?.slice(0, 50)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No recipes match your filters.</p>
        )}
      </main>
    </div>
  );
}
