import { useDebouncedCallback } from 'use-debounce';

type Props = {
  onSearch(q: string): void;
};

const SearchInput = ({ onSearch }: Props) => {
  const debounced = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 1000);

  return (
    <div className="relative max-w-md mx-auto w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
