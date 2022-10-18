import FavoriteRestaurantProvider from '../src/scripts/provider/favorite.provider';
import { itActsAsFavoriteRestaurantModel } from './contracts/favorite_restaurant.contract';

describe('Favorite Restaurant Provider Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantProvider.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantProvider.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantProvider);
});
