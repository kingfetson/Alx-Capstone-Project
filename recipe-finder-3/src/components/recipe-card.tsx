import { RecipeCard } from "./RecipeCard"

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    rating: 4.8,
    description: "A classic Italian pasta with creamy sauce, pancetta, and parmesan.",
    image: "/spaghetti.jpg",
  },
  {
    id: 2,
    title: "Avocado Toast",
    rating: 4.5,
    description: "Simple but delicious toast topped with avocado, olive oil, and chili flakes.",
    image: "/avocado.jpg",
  },
  {
    id: 3,
    title: "Sushi Platter",
    rating: 5.0,
    description: "Freshly prepared sushi rolls with tuna, salmon, and avocado.",
    image: "/sushi.jpg",
  },
  {
    id: 4,
    title: "Pancakes",
    rating: 4.2,
    description: "Fluffy pancakes served with maple syrup and berries.",
    image: "/pancakes.jpg",
  },
]

export function RecipeGrid() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Recipes</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
