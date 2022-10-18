import FavoriteRestaurantProvider from '../../src/scripts/provider/favorite.provider';
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite.button.presenter';

export const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favorite-container'),
    favoriteProvider: FavoriteRestaurantProvider,
    restaurant,
  });
};
