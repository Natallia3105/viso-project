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
        onSearch={(q) => {
          setSearchQ(q);
        }}
      />
      {!isLoading && data && data?.length > 0 && (
        <RecipesList isLoading={isLoading} data={data || []} />
      )}
    </div>
  );
};

export default Home;
