import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 font-serif">About RecipeFinder</h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Welcome to RecipeFinder, your ultimate destination for discovering and exploring delicious recipes from
                around the world. Our mission is to make cooking enjoyable and accessible for everyone, whether you're a
                seasoned chef or just starting your culinary journey.
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Our Mission</h2>
                <p>
                  We believe that great food brings people together. Our platform is designed to help you easily find
                  recipes that fit your taste, dietary needs, and cooking skill level. We strive to provide a diverse
                  collection of recipes, from quick weeknight meals to elaborate festive dishes, ensuring there's always
                  something new to try.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">What We Offer</h2>
                <p>
                  RecipeFinder offers an intuitive search experience, robust filtering options, and a user-friendly
                  interface to browse recipes by cuisine, dietary preference, difficulty, and more. You can save your
                  favorite recipes, create meal plans, and share your culinary creations with our growing community.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Contact Us</h2>
                <div className="space-y-2">
                  <p>info@recipefinder.com</p>
                  <p>+1 (123) 456-7890</p>
                  <p>123 Culinary Lane, Foodville, FV 98765</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
