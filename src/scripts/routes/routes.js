import Restaurants from '../views/pages/restaurants.view';
import Detail from '../views/pages/detail.view';
import Favorite from '../views/pages/favorite.view';

const routes = {
  '/': Restaurants, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
