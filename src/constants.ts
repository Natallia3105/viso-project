export const RECIPES_API_URL =
  'https://www.themealdb.com/api/json/v1/1';

export enum QueryKeys {
  Recipes = 'recipes',
}

const GithubPagesPrefix = import.meta.env.PROD ? '/viso-project/' : '/'

export const AppRoutes = {
  Home: GithubPagesPrefix + '',
  Recipes: GithubPagesPrefix + 'recipes',
  Favorites: GithubPagesPrefix + 'favorites',

  resolveRecipe: (id: string) => `${AppRoutes.Recipes}/${id}`,
};


export const FAVORITES_RECIPES_KEY = 'favorites'
