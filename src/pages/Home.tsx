import RecipesList from '../components/RecipesList.tsx';
import SearchInput from '../components/SearchInput.tsx';
import { useState } from 'react';
import { useRecipesQuery } from '../services/recipes.ts';

const Home = () => {
  const [searchQ, setSearchQ] = useState<string>('');

  const { data, isLoading } = useRecipesQuery(searchQ);

  return (
    <div className="flex flex-col gap-4 mb-40">
      <SearchInput
        q={searchQ}
        onSearch={(q) => {
          setSearchQ(q);
        }}
      />
      {!isLoading && data.length > 0 && (
        <RecipesList
          isLoading={isLoading}
          data={data || []}
          onFilterClear={() => {
            setSearchQ('');
          }}
        />
      )}
    </div>
  );
};

export default Home;
