import { Link } from 'react-router';
import { AppRoutes } from '../constants.ts';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4"
        aria-label="Global"
      >
        <Link
          to={AppRoutes.Home}
          className="text-sm/6 font-semibold text-gray-900 mr-3"
        >
          Home
        </Link>
        <Link
          to={AppRoutes.Favorites}
          className="text-sm/6 font-semibold text-gray-900 mr-auto"
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
