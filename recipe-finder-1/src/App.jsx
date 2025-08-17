import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SearchBar setRecipes={setRecipes} setLoading={setLoading} setError={setError} />
        </div>

        {loading && <p className="text-center mt-4">⏳ Loading recipes...</p>}
        {error && <p className="text-center mt-4 text-red-600">{error}</p>}

        <RecipeList recipes={recipes} />
      </main>
    </div>
  );
}

export default App;