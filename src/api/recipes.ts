import { Recipe } from '../models/recipe.ts';
import { RECIPES_API_URL } from '../constants.ts';
import { formatRecipe } from '../services/recipes.ts';

export const searchRecipes = async (q: string): Promise<Recipe[]> => {
  const res = await fetch(`${RECIPES_API_URL}/search.php?s=${q}`);

  const data = (await res.json()) as { meals: Recipe[] };

  if (data?.meals) return data?.meals.map((rec) => formatRecipe(rec));

  return [];
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  const res = await fetch(`${RECIPES_API_URL}/lookup.php?i=${id}`);

  const data = (await res.json()) as { meals: Recipe[] };

  const recipe = data?.meals?.[0];

  if (recipe) {
    return formatRecipe(recipe);
  }

  return null;
};
