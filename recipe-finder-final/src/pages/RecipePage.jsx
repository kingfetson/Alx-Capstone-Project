import React, { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import fallbackRecipes from "../data.json"
import { RecipeCard } from "@/components/recipe-card" // make sure you have this component

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        if (!res.ok) throw new Error("API request failed")
        const data = await res.json()

        if (data.meals) {
          const formatted = data.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
            description: meal.strInstructions.substring(0, 100) + "...",
            rating: (Math.random() * (5 - 4) + 4).toFixed(1), // fake ratings since API doesn’t provide
          }))
          setRecipes(formatted)
        } else {
          setRecipes(fallbackRecipes)
        }
      } catch (error) {
        console.error("API fetch failed, using fallback:", error)
        setRecipes(fallbackRecipes)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  // Filter recipes by search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-full md:w-48 border-gray-300">
              <SelectValue placeholder="Sort by: Relevance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Sort by: Relevance</SelectItem>
              <SelectItem value="rating">Sort by: Rating</SelectItem>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
              <SelectItem value="popular">Sort by: Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold text-orange-500 mb-4 text-lg">Cuisine</h3>
              <div className="space-y-3">
                {["Italian", "Mexican", "Asian", "Indian", "Mediterranean"].map((cuisine) => (
                  <div key={cuisine} className="flex items-center space-x-2">
                    <Checkbox id={`recipe-${cuisine.toLowerCase()}`} />
                    <label htmlFor={`recipe-${cuisine.toLowerCase()}`} className="text-sm text-gray-600 cursor-pointer">
                      {cuisine}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-4 text-lg">Dietary Preferences</h3>
              <div className="space-y-3">
                {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"].map((diet) => (
                  <div key={diet} className="flex items-center space-x-2">
                    <Checkbox id={`recipe-${diet.toLowerCase().replace("-", "")}`} />
                    <label
                      htmlFor={`recipe-${diet.toLowerCase().replace("-", "")}`}
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {diet}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-4 text-lg">Difficulty</h3>
              <div className="space-y-3">
                {["Easy", "Medium", "Hard"].map((difficulty) => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox id={`recipe-${difficulty.toLowerCase()}`} />
                    <label
                      htmlFor={`recipe-${difficulty.toLowerCase()}`}
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {difficulty}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Recipes Grid */}
          <div className="flex-1">
            {loading ? (
              <p className="text-center text-gray-500">Loading recipes...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipesPage
