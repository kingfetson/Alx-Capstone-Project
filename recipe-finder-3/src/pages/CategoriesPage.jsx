"use client";
import React, { useEffect, useState } from "react";
export default function CategoriesPage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("alphabetical");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;

  // Toggle checkbox
  const toggleFilter = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  // Fetch recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let results = [];

        // 1. Fetch by Cuisine (TheMealDB)
        if (selectedCuisines.length > 0) {
          for (const cuisine of selectedCuisines) {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
            );
            const data = await res.json();
            if (data.meals) {
              results.push(
                ...data.meals.map((m) => ({
                  id: m.idMeal,
                  title: m.strMeal,
                  image: m.strMealThumb,
                }))
              );
            }
          }
        }

        // 2. Fetch by Dietary Preferences & Difficulty (Spoonacular)
        if (selectedDiets.length > 0 || selectedDifficulty.length > 0) {
          const dietQuery = selectedDiets.join(","); // e.g. vegetarian,vegan
          const maxReadyTime =
            selectedDifficulty.length > 0
              ? selectedDifficulty[0] // take one difficulty (Easy=30, Medium=60, Hard=120)
              : "";

          const url = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietQuery}&maxReadyTime=${maxReadyTime}&number=10&apiKey=${apiKey}`;
          const res = await fetch(url);
          const data = await res.json();
          if (data.results) {
            results.push(
              ...data.results.map((m) => ({
                id: m.id,
                title: m.title,
                image: m.image,
              }))
            );
          }
        }

        setRecipes(results);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
      setLoading(false);
    };

    fetchRecipes();
  }, [selectedCuisines, selectedDiets, selectedDifficulty]);

  // Apply search + sort
  const filteredRecipes = recipes
    .filter((meal) => meal.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "alphabetical") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className="bg-orange-50 min-h-screen font-sans">
      <main className="flex px-10 py-6 gap-6">
        {/* Sidebar */}
        <aside className="bg-orange-200 rounded-2xl p-6 w-60">
          {/* Cuisine */}
          <div className="mb-6">
            <h2 className="text-orange-600 font-semibold mb-2">Cuisine</h2>
            <ul className="space-y-2 text-gray-700">
              {["Italian", "Mexican", "Canadian", "Indian", "French"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCuisines.includes(item)}
                      onChange={() =>
                        toggleFilter(
                          selectedCuisines,
                          setSelectedCuisines,
                          item
                        )
                      }
                      className="accent-orange-500"
                    />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Dietary Preferences */}
          <div className="mb-6">
            <h2 className="text-orange-600 font-semibold mb-2">
              Dietary Preferences
            </h2>
            <ul className="space-y-2 text-gray-700">
              {["vegetarian", "vegan", "gluten free"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDiets.includes(item)}
                    onChange={() =>
                      toggleFilter(selectedDiets, setSelectedDiets, item)
                    }
                    className="accent-orange-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Difficulty */}
          <div>
            <h2 className="text-orange-600 font-semibold mb-2">Difficulty</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                { label: "Easy (≤30 min)", value: 30 },
                { label: "Medium (≤60 min)", value: 60 },
                { label: "Hard (≤120 min)", value: 120 },
              ].map((item) => (
                <li key={item.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDifficulty.includes(item.value)}
                    onChange={() =>
                      toggleFilter(
                        selectedDifficulty,
                        setSelectedDifficulty,
                        item.value
                      )
                    }
                    className="accent-orange-500"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          {/* Search + Sort */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes..."
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="alphabetical">Sort by: Alphabetical</option>
            </select>
          </div>

          {/* Recipes Grid */}
          {loading ? (
            <p className="text-gray-600">Loading recipes...</p>
          ) : filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              {filteredRecipes.map((meal) => (
                <div
                  key={meal.id}
                  className="bg-black rounded-xl shadow-sm p-6 flex flex-col items-center justify-center"
                >
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-34 h-34 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-medium text-gray-200">{meal.title}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Select filters to view recipes.</p>
          )}
        </section>
      </main>
    </div>
  );
}
