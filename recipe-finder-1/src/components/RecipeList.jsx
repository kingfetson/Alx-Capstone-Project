import { useEffect, useState } from 'react';
import { searchMealsByName } from '../services/api';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    searchMealsByName('chicken')
      .then((meals) => {
        setRecipes(meals || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load meals');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading meals...</p>}
      {error && <p>{error}</p>}
      <ul>
        {recipes.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
