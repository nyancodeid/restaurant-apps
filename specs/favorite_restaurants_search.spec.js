import FavoriteRestaurantProvider from '../src/scripts/provider/favorite.provider';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/components/favorite-restaurants/search.view';
import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/components/favorite-restaurants/search.presenter';
import RestauranItem from '../src/scripts/components/restaurant-item';

customElements.define('restaurant-item', RestauranItem);

describe('Searching restaurants', () => {
  const states = {
    presenter: null,
    provider: null,
    view: null,
  };

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('search-query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('input'));
  };

  const setRestaurantSearchContainer = () => {
    states.view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = states.view.getTemplate();
  };

  const constructPresenter = () => {
    states.provider = spyOnAllFunctions(FavoriteRestaurantProvider);

    states.presenter = new FavoriteRestaurantSearchPresenter({
      provider: states.provider,
      view: states.view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('kedai kopi');

      expect(states.presenter.latestQuery)
        .toEqual('kedai kopi');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurants('kedai kupi');

      expect(states.provider.searchRestaurants)
        .toHaveBeenCalledWith('kedai kupi');
    });

    it('should show the found restaurants', async () => {
      states.presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('restaurant-item').length)
        .toEqual(1);

      states.presenter._showFoundRestaurants([{
        id: 1,
        name: 'Kedai Kopi',
      }, {
        id: 2,
        name: 'Kedai Starduck',
      }]);
      expect(document.querySelectorAll('restaurant-item').length)
        .toEqual(2);
    });

    it('should show the title of the found restaurants', () => {
      states.presenter._showFoundRestaurants([{
        id: 1,
        name: 'Starduck Original',
      }]);
      expect(document.querySelectorAll('.restaurant_item__title h3')
        .item(0).textContent)
        .toEqual('Starduck Original');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.querySelector('.restaurant_contents').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.restaurant_item__title h3');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      states.provider.searchRestaurants.withArgs('Starduck').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('Starduck');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(states.presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('    ');
      expect(states.presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('');
      expect(states.presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('\t');
      expect(states.presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(states.provider.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.querySelector('.restaurant_contents').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant__empty_result').length).toEqual(1);

        done();
      });

      states.provider.searchRestaurants.withArgs('Warung Bismillah').and.returnValues([]);

      searchRestaurants('Warung Bismillah');
    });

    it('should not show any restaurant', (done) => {
      document.querySelector('.restaurant_contents').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length)
          .toEqual(0);
        done();
      });

      states.provider.searchRestaurants.withArgs('Kedai Bakaran')
        .and
        .returnValues([]);

      searchRestaurants('Kedai Bakaran');
    });
  });
});
