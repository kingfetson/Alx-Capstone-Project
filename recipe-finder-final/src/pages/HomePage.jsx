import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { fetchRecipes, fetchRandomMeals, fetchCategories } from "../services/api"


export default function HomePage() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [randomRecipes, setRandomRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // Load random recipes + categories on page load
  useEffect(() => {
    const loadData = async () => {
      try {
        const random = await fetchRandomMeals(6)
        const cats = await fetchCategories()
        setRandomRecipes(random)
        setCategories(cats)
      } catch (err) {
        console.error("Failed to load homepage data:", err)
      }
    }
    loadData()
  }, [])

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
                <Search className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Card
                key={cat.idCategory}
                className="cursor-pointer overflow-hidden border hover:shadow-lg transition-shadow"
                onClick={() => setQuery(cat.strCategory)} // 👈 Clicking sets query
              >
                <img
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  className="w-65 h-24 object-cover"
                />
                <CardContent className="p-2 text-center">
                  <h3 className="text-sm font-medium text-orange-600">{cat.strCategory}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {recipes.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Search Results</h2>
            {loading ? (
              <p className="text-center">Loading recipes...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((item) => (
                  <Card key={item.idMeal} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-gray-200">
                      <img
                        src={item.strMealThumb}
                        alt={item.strMeal}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.strMeal}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.strArea || "Unknown cuisine"}
                      </p>
                      <a
                        href={item.strSource || "#"}
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
            )}
          </div>
        </section>
      )}

      {/* Random Recipes Section */}
      <section className="px-6 py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Chef’s Picks</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomRecipes.map((item) => (
              <Card key={item.idMeal} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-90 h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.strMeal}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.strArea || "Unknown cuisine"}
                  </p>
                  <a
                    href={item.strSource || "#"}
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
        </div>
      </section>
    </div>
  )
}
