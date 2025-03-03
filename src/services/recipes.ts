import { useQuery } from '@tanstack/react-query';
import { FAVORITES_RECIPES_KEY, QueryKeys } from '../constants.ts';
import { fetchRecipeById, searchRecipes } from '../api/recipes.ts';
import { Recipe } from '../models/recipe.ts';

export const useRecipesQuery = (searchQuery: string) => {
  return useQuery({
    queryKey: [QueryKeys.Recipes, searchQuery],
    queryFn: () => searchRecipes(searchQuery),
    staleTime: 0,
  });
};

export const useRecipe = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.Recipes, id],
    queryFn: () => fetchRecipeById(id),
    enabled: !!id,
  });
};

export const formatRecipe = (recipe: Recipe): Recipe => {
  const formattedRecipe = {
    ingredients: [],
    measures: [],
  } as unknown as Recipe;

  // @ts-ignore
  Object.keys(recipe).forEach((key: keyof Recipe) => {
    const isIngKey = key.includes('strIngredient');
    const isMeasureKey = key.includes('strMeasure');

    if (isIngKey) {
      const ingValue = recipe[key];

      if (ingValue && ingValue !== ' ') {
        formattedRecipe.ingredients.push(ingValue as string);
      }

      return;
    }

    if (isMeasureKey) {
      const measureValue = recipe[key];

      if (measureValue && measureValue !== ' ') {
        formattedRecipe.measures.push(measureValue as string);
      }

      return;
    }

    // @ts-ignore
    formattedRecipe[key] = recipe[key];
  });

  return formattedRecipe;
};

export const getFavoritesRecipes = (): Recipe[] => {
  const favorites = localStorage.getItem(FAVORITES_RECIPES_KEY);

  if (favorites) return JSON.parse(favorites);

  return [];
};

export const setFavoritesRecipe = (recipe: Recipe): void => {
  const favorites = localStorage.getItem(FAVORITES_RECIPES_KEY);

  if (favorites) {
    const existing = JSON.parse(favorites) as Recipe[];

    const isExist = existing.find((r) => r.idMeal === recipe.idMeal);

    if (!isExist) {
      localStorage.setItem(
        FAVORITES_RECIPES_KEY,
        JSON.stringify([...existing, recipe]),
      );
    }
  } else {
    localStorage.setItem(FAVORITES_RECIPES_KEY, JSON.stringify([recipe]));
  }
};

export const isFavoritesAdded = (id: string): boolean => {
  const favorites = localStorage.getItem(FAVORITES_RECIPES_KEY);

  if (favorites) {
    const existing = JSON.parse(favorites) as Recipe[];

    return !!existing.find((r) => r.idMeal === id);
  } else {
    return false;
  }
};
