import { Recipe } from '../models/recipe.ts';
import { Link } from 'react-router';
import { AppRoutes } from '../constants.ts';
import { isFavoritesAdded, setFavoritesRecipe } from '../services/recipes.ts';
import { useState } from 'react';

type Props = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: Props) => {
  const isAddedToFavorites = isFavoritesAdded(recipe.idMeal);
  const [isFavorite, setIsFavorite] = useState(isAddedToFavorites);

  return (
    <div className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm max-w-400 w-full">
      <div className="flex">
        <img className="rounded-t-md w-full" src={recipe.strMealThumb} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex justify-between items-center">
          {recipe.strMeal}
          {!isFavorite && (
            <button
              onClick={() => {
                setFavoritesRecipe(recipe);
                setIsFavorite(true);
              }}
              disabled={isAddedToFavorites}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Choose
            </button>
          )}
        </h5>
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              <strong>Category: </strong> {recipe.strCategory}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Area: </strong> {recipe.strArea}
            </p>
          </div>
          <Link
            to={`${AppRoutes.resolveRecipe(recipe.idMeal)}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
