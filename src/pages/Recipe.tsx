import { useParams } from 'react-router';
import { useRecipe } from '../services/recipes.ts';
import List from '../components/List.tsx';

const Recipe = () => {
  const params = useParams<{ id: string }>();

  const { data } = useRecipe(params.id as string);

  if (!data) return;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-3 text-gray-900">
        {data.strMeal}
      </h1>
      <figure className="max-w-lg mb-3">
        <img
          className="h-auto max-w-full rounded-lg"
          src={data.strMealThumb}
          alt={data.strMeal}
        />
      </figure>

      <List
        data={[
          {
            name: 'Area:',
            value: data.strArea,
          },
          {
            name: 'Category:',
            value: data.strCategory,
          },
          {
            name: 'Ingredients:',
            value: data.ingredients.join(', '),
          },
          {
            name: 'Measures:',
            value: data.measures.join(', '),
          },
        ]}
      />

      <p className="mt-5">{data.strInstructions}</p>
    </div>
  );
};

export default Recipe;
