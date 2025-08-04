import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './components/Header';
import SearchBar from "./components/SearchBar";
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />
      <main className= "container mx-auto p-4">
        <SearchBar setRecipes={setRecipes} />
<RecipeList recipes = {recipes} />

      </main>
      </div>
  )
}

export default App;
