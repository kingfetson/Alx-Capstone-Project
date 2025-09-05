// src/services/api.js

const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

// Search recipes by keyword
export async function fetchRecipes(query) {
  try {
    const res = await fetch(`${MEALDB_BASE}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

// Fetch a few random recipes for homepage
export async function fetchRandomRecipes(count = 6) {
  try {
    const promises = Array.from({ length: count }, () =>
      fetch(`${MEALDB_BASE}/random.php`).then((res) => res.json())
    );
    const results = await Promise.all(promises);

    // Flatten and clean the array
    return results.map((r) => r.meals[0]).filter(Boolean);
  } catch (error) {
    console.error("Error fetching random recipes:", error);
    return [];
  }
}
