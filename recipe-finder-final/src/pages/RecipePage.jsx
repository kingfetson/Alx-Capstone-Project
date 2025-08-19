import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RecipeCard } from "@/components/recipe-card"

const recipes = [
  {
    id: 1,
    title: "Classic Lasagna",
    rating: 4.7,
    description: "Layers of pasta, rich meat sauce, and creamy béchamel.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    rating: 4.8,
    description: "Creamy and flavorful Indian curry with tender chicken.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Vegan Buddha Bowl",
    rating: 4.5,
    description: "A nutritious and colorful bowl packed with fresh veggies and grains.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Spicy Shrimp Tacos",
    rating: 4.6,
    description: "Zesty and spicy shrimp tacos with a fresh slaw.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Beef and Broccoli Stir-fry",
    rating: 4.8,
    description: "A quick and easy weeknight meal with tender beef and crisp broccoli.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Mediterranean Quinoa Salad",
    rating: 4.6,
    description: "Light and refreshing salad with quinoa, vegetables, and feta.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Classic Margherita Pizza",
    rating: 4.7,
    description: "Simple yet delicious pizza with fresh mozzarella, basil, and tomato.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Hearty Beef Stew",
    rating: 4.8,
    description: "Slow-cooked beef with root vegetables in a rich, savory broth.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Search recipes..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
