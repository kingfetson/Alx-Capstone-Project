import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { fetchRecipes } from "../services/api" // adjust path if needed

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query) return
    setLoading(true)
    try {
      const data = await fetchRecipes(query)
      setRecipes(data)
    } catch (error) {
      console.error("Failed to fetch recipes:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8 leading-tight">
            Discover Delicious Recipes for Every Occasion
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full px-6 py-4 text-lg rounded-full border-0 bg-white shadow-sm pr-16"
              />
              <Button
                size="sm"
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full px-4"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Featured Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium">
              Get Started
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-800 px-8 py-3 rounded-full text-lg font-medium"
            >
              Browse Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Recipes</h2>

          {loading ? (
            <p className="text-center">Loading recipes...</p>
          ) : recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={item.recipe.image}
                      alt={item.recipe.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.recipe.label}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.recipe.cuisineType?.join(", ") || "No cuisine info"}
                    </p>
                    <a
                      href={item.recipe.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      View Recipe
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No recipes found. Try searching above!</p>
          )}
        </div>
      </section>
    </div>
  )
};
