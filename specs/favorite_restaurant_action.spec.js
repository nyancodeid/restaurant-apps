import FavoriteRestaurantProvider from '../src/scripts/provider/favorite.provider';
import * as TestFactories from './helpers/test.factory';

describe('Favoriting a Restaurant', () => {
  const favoriteAriaLabel = 'add to favorited restaurant';
  const unfavoriteAriaLabel = 'remove from favorited restaurant';

  const createFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  beforeEach(() => {
    createFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector(`[aria-label="${favoriteAriaLabel}"]`))
      .toBeTruthy();
  });

  it('should show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector(`[aria-label="${unfavoriteAriaLabel}"]`))
      .toBeFalsy();
  });

  it('should be able to add restorant into favorited restaurants', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantProvider.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantProvider.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already on the favorited restaurants', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantProvider.putRestaurant({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantProvider.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantProvider.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantProvider.getAllRestaurants()).toEqual([]);
  });
});
