import { when } from '../../../utils/helpers';

class FavoriteRestaurantSearchPresenter {
  constructor({ view, provider }) {
    this._view = view;
    this._favoriteProvider = provider;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    const foundRestaurants = await when(
      this.latestQuery.length > 0,
      () => this._favoriteProvider.searchRestaurants(this.latestQuery),
      () => this._favoriteProvider.getAllRestaurants(),
    );

    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurants = []) {
    this._view.showFavoriteRestaurants(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
