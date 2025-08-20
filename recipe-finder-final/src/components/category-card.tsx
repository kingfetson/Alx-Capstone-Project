import { Card, CardContent } from "@/components/ui/card"

interface Category {
  id: number
  name: string
  image: string
}

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-gray-200 bg-white">
      <CardContent className="p-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <h3 className="font-semibold text-lg text-gray-800 font-serif">{category.name}</h3>
      </CardContent>
    </Card>
  )
}
