import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if this recipe is already in favorites
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.uri === recipe.uri));
  }, [recipe.uri]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter((fav) => fav.uri !== recipe.uri);
    } else {
      // Add to favorites
      favorites.push(recipe);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200 relative">
      <img src={recipe.image} alt={recipe.label} className="w-full h-48 object-cover" />
      
      {/* Favorite button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 p-2 rounded-full ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2 truncate">{recipe.label}</h2>
        <Link
          to={`/recipe/${encodeURIComponent(recipe.uri)}`}
          state={{ recipe }}
          className="text-green-600 hover:underline font-medium"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
}
