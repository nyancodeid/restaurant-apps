import FavoriteRestaurantProvider from '../src/scripts/provider/favorite.provider';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/components/favorite-restaurants/search.view';
import FavoriteRestaurantShowPresenter
  from '../src/scripts/views/components/favorite-restaurants/show.presenter';

describe('Showing all favorited restaurant', () => {
  const states = {
    view: null,
  };

  const renderTemplate = () => {
    states.view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = states.view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When favorited restaurants are empty', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteProvider = spyOnAllFunctions(FavoriteRestaurantProvider, true);

      new FavoriteRestaurantShowPresenter({
        view: states.view,
        provider: favoriteProvider,
      });

      expect(favoriteProvider.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurant have been favorited', (done) => {
      document.querySelector('.restaurant_contents').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant__empty_result').length)
          .toEqual(1);

        done();
      });

      const favoriteProvider = spyOnAllFunctions(FavoriteRestaurantProvider, true);
      favoriteProvider.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view: states.view,
        provider: favoriteProvider,
      });
    });
  });

  describe('When favorited restaurants are exists', () => {
    it('should show the favorited restaurants', (done) => {
      document.querySelector('.restaurant_contents').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length)
          .toEqual(2);

        done();
      });

      const favoriteProvider = spyOnAllFunctions(FavoriteRestaurantProvider, true);
      favoriteProvider.getAllRestaurants.and.returnValues([
        {
          id: 'random-id-1',
          name: 'Kedai Kopi MapanMantav',
          description: 'Kedai Kopi Paling Mantav',
          rating: 5,
          city: 'Jombang',
        },
        {
          id: 'random-id-2',
          name: 'Kedai Kopi MapanMantap',
          description: 'Kedai Kopi Paling Mantap',
          rating: 4.9,
          city: 'Jombang',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view: states.view,
        provider: favoriteProvider,
      });
    });
  });
});
