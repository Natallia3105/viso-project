import { Recipe } from '../models/recipe.ts';
import Spinner from './Spinner.tsx';
import RecipeCard from './RecipeCard.tsx';
import EmptyMessage from './EmptyMessage.tsx';
import Pagination from './Pagination.tsx';
import { useState } from 'react';

const ITEMS_PER_PAGE = 6;
const CLEAR_FILTER_TEXT = '-----Clear-----';

type Props = {
  data: Recipe[];
  isLoading: boolean;
};

const RecipesList = ({ data = [], isLoading = false }: Props) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const [filteredData, setFilteredData] = useState<Recipe[]>(data);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice(itemOffset, endOffset);

  const onPageChange = (selected: number) => {
    const newOffset = (selected * ITEMS_PER_PAGE) % filteredData.length;

    setItemOffset(newOffset);
  };

  const categories = [...new Set(data.map((recipe) => recipe.strCategory))];

  return (
    <div className="flex flex-col items-center">
      <form className="max-w-sm flex items-center mb-5 ml-auto">
        <label className="block text-sm font-medium text-gray-900 flex-shrink-0 mr-2">
          Filter by category:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            const val = e.target.value;

            if (val === CLEAR_FILTER_TEXT) {
              setFilteredData(data);
            } else {
              setFilteredData(
                data.filter((rec) => {
                  return rec.strCategory === val;
                }),
              );
            }
          }}
        >
          {categories.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
          <option value={CLEAR_FILTER_TEXT}>{CLEAR_FILTER_TEXT}</option>
        </select>
      </form>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {currentItems.map((recipe) => {
          return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
      <Pagination pageCount={pageCount} onPageChange={onPageChange} />
    </div>
  );
};

export default RecipesList;
