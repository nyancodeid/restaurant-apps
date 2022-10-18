import FavoriteRestaurantProvider from '../src/scripts/provider/favorite.provider';
import * as TestFactories from './helpers/test.factory';

describe('Unfavoriting an Restaurant', () => {
  const favoriteAriaLabel = 'add to favorited restaurant';
  const unfavoriteAriaLabel = 'remove from favorited restaurant';

  const createFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  // Before test we need put restaurant with id on the favorited restaurans lists
  beforeEach(async () => {
    createFavoriteButtonContainer();

    await FavoriteRestaurantProvider.putRestaurant({ id: 1 });
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
  });

  // and after test we need remove it from the favorited restaurans lists
  afterEach(async () => {
    await FavoriteRestaurantProvider.deleteRestaurant(1);
  });

  it('should display unfavorite when the restaurant has been favorited', async () => {
    expect(document.querySelector(`[aria-label="${unfavoriteAriaLabel}"]`)).toBeTruthy();
  });

  it('should not display favorite when the restaurant has been favorited', async () => {
    expect(document.querySelector(`[aria-label="${favoriteAriaLabel}"]`)).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the favorited restaurants', async () => {
    document.querySelector(`[aria-label="${unfavoriteAriaLabel}"]`)
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantProvider.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorite restaurant is not on the favorited restaurants', async () => {
    await FavoriteRestaurantProvider.deleteRestaurant(1);

    document.querySelector(`[aria-label="${unfavoriteAriaLabel}"]`)
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantProvider.getAllRestaurants()).toEqual([]);
  });
});
