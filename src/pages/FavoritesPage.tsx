import { getFavoritesRecipes } from '../services/recipes.ts';
import RecipesList from '../components/RecipesList.tsx';

const FavoritesPage = () => {
  const favorites = getFavoritesRecipes();

  const ingredients = [
    ...new Set(favorites.map((recipe) => recipe.ingredients).flat()),
  ];

  return (
    <div className="flex flex-col mb-40">
      <RecipesList isLoading={false} data={favorites} />

      {favorites.length > 0 && (
        <p className="mb-1 font-normal text-gray-700 mt-9">
          <strong>Common ingredients: </strong> {ingredients.join(', ')}
        </p>
      )}

      <h1 className="text-xl font-semibold mb-3 text-gray-900">
        Instructions:
      </h1>
      {favorites.map((fav) => {
        return (
          <p className="mb-1 font-normal text-gray-700 mt-9">
            <strong>{fav.strMeal}: </strong> {fav.strInstructions}
          </p>
        );
      })}
    </div>
  );
};

export default FavoritesPage;
