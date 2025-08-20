import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Recipe {
  id: number
  title: string
  rating: number
  description: string
  image: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200">
      <div className="aspect-[4/3] relative">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 font-serif">{recipe.title}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-600">{recipe.rating}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{recipe.description}</p>
      </CardContent>
    </Card>
  )
}
