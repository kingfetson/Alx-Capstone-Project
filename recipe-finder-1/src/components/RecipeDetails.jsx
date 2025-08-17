import { useLocation, Link } from "react-router-dom";

export default function RecipeDetails() {
  const { state } = useLocation();
  const recipe = state?.recipe;

  if (!recipe) {
    return <p className="text-center mt-6">No recipe data available.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <img src={recipe.image} alt={recipe.label} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{recipe.label}</h1>
      <p className="text-gray-600 mt-2">Calories: {Math.round(recipe.calories)}</p>
      <h2 className="mt-4 font-semibold">Ingredients:</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredientLines.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:underline mt-4 block"
      >
        Full Recipe Instructions →
      </a>
      <Link to="/" className="block mt-4 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
