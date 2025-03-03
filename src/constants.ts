export const RECIPES_API_URL =
  'https://www.themealdb.com/api/json/v1/1';

export enum QueryKeys {
  Recipes = 'recipes',
}

export const AppRoutes = {
  Home: '/',
  Recipes: '/recipes',
  Favorites: '/favorites',

  resolveRecipe: (id: string) => `${AppRoutes.Recipes}/${id}`,
};

export const FAVORITES_RECIPES_KEY = 'favorites'
