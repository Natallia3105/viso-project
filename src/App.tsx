import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './constants.ts';
import Layout from './components/Layout.tsx';
import Recipe from './pages/Recipe.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={AppRoutes.Home} element={<Home />} />
            <Route path={AppRoutes.Favorites} element={<FavoritesPage />} />
            <Route path={`${AppRoutes.Recipes}/:id`} element={<Recipe />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
