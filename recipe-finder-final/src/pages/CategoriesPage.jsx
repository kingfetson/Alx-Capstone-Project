import React from "react";
import Footer from "../components/Footer";

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CategoryCard } from "@/components/category-card"

const categories = [
  {
    id: 1,
    name: "Italian",
    image: "/italian-pasta-fork.png",
  },
  {
    id: 2,
    name: "Mexican",
    image: "/placeholder-b0ayo.png",
  },
  {
    id: 3,
    name: "Asian",
    image: "/asian-stir-fry-wok.png",
  },
  {
    id: 4,
    name: "Indian",
    image: "/indian-curry-clay-pot.png",
  },
  {
    id: 5,
    name: "Mediterranean",
    image: "/mediterranean-grilled-fish.png",
  },
  {
    id: 6,
    name: "Desserts",
    image: "/colorful-desserts-pastries.png",
  },
  {
    id: 7,
    name: "Breakfast",
    image: "/breakfast-pancakes-berries.png",
  },
  {
    id: 8,
    name: "Soups",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Search categories..."
              className="flex-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Select defaultValue="alphabetical">
            <SelectTrigger className="w-full md:w-48 border-gray-300">
              <SelectValue placeholder="Sort by: Alphabetical" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alphabetical">Sort by: Alphabetical</SelectItem>
              <SelectItem value="popular">Sort by: Popular</SelectItem>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
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
                    <Checkbox id={cuisine.toLowerCase()} />
                    <label htmlFor={cuisine.toLowerCase()} className="text-sm text-gray-600 cursor-pointer">
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
                    <Checkbox id={diet.toLowerCase().replace("-", "")} />
                    <label
                      htmlFor={diet.toLowerCase().replace("-", "")}
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
                    <Checkbox id={difficulty.toLowerCase()} />
                    <label htmlFor={difficulty.toLowerCase()} className="text-sm text-gray-600 cursor-pointer">
                      {difficulty}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Categories Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
