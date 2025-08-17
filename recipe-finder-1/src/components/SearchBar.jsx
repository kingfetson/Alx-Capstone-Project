import { useState } from "react";
import { fetchRecipes } from "../services/api";

export default function SearchBar({ setRecipes, setLoading, setError }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const results = await fetchRecipes(query);
      if (results.length === 0) {
        setError("No recipes found. Try a different keyword.");
      }
      setRecipes(results);
    } catch (error) {
   console.error(error);
   setError("Failed to fetch recipes. Please try again later.");
}finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setRecipes([]);
    setError("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 p-4">
      <input
        type="text"
        placeholder="Search by ingredient or dish name"
        className="flex-grow p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full sm:w-auto"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
