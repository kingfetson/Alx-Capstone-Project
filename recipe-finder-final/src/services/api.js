// Search for meals by name
export async function fetchRecipes(query) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
}

// Get multiple random meals
export async function fetchRandomMeals(count = 6) {
  const promises = Array.from({ length: count }, () =>
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) => res.json())
  );
  const results = await Promise.all(promises);
  return results.map((r) => r.meals[0]);
}

// ✅ Get categories list
export async function fetchCategories() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await res.json();
  return data.categories || [];
}
