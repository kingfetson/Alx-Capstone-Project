
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, User } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-orange-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500">RecipeFinder</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Home
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Recipes
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Categories
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              About Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-orange-500" />
            <User className="w-5 h-5 text-orange-500" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8 leading-tight">
            Discover Delicious Recipes for Every Occasion
          </h1>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full px-6 py-4 text-lg rounded-full border-0 bg-white shadow-sm pr-16"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full px-4"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

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

      {/* Featured Recipes Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Featured Recipes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Spicy Chicken Stir-fry */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img
                  src="/spicy-chicken-stir-fry.png"
                  alt="Spicy Chicken Stir-fry"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Spicy Chicken Stir-fry</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {"★".repeat(4)}
                    {"☆".repeat(1)}
                  </div>
                  <span className="text-gray-600 ml-2">4.8</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Quick and flavorful stir-fry with tender chicken and crisp vegetables.
                </p>
              </CardContent>
            </Card>

            {/* Creamy Tomato Pasta */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img
                  src="/creamy-tomato-pasta.png"
                  alt="Creamy Tomato Pasta"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Creamy Tomato Pasta</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-gray-600 ml-2">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">A comforting pasta dish with a rich and creamy tomato sauce.</p>
              </CardContent>
            </Card>

            {/* Hearty Lentil Soup */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img src="/lentil-soup-bowls.png" alt="Hearty Lentil Soup" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hearty Lentil Soup</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {"★".repeat(4)}
                    {"☆".repeat(1)}
                  </div>
                  <span className="text-gray-600 ml-2">4.7</span>
                </div>
                <p className="text-gray-600 text-sm">A nutritious and filling soup, perfect for a cozy evening.</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Recipe Card */}
          <div className="mt-8 max-w-md mx-auto lg:mx-0">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img src="/lemon-herb-salmon.png" alt="Lemon Herb Salmon" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lemon Herb Salmon</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-gray-600 ml-2">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">Baked salmon with a zesty lemon and fresh herb marinade.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
