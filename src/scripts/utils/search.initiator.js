import RestaurantProvider from '../provider/restaurant.provider';

class SearchInitiator {
  init({ restaurants, onLoading }) {
    this.restaurants = restaurants;

    this.searchElement = document.querySelector('.search_widget__inner');
    this.inputElement = this.searchElement.querySelector('.search_widget__input');
    this.resetElement = this.searchElement.querySelector('.search_widget__clear');
    this.countElement = document.querySelector('.restaurant_count');
    this.emptyElement = document.querySelector('.restaurant__empty_result');

    this.keyword = '';
    this.onSearchCallback = null;
    this.onLoadingCallback = onLoading;

    return this;
  }

  search(callback) {
    this.onSearchCallback = (restaurants) => {
      this._setRestaurantDisplayedCount(restaurants.length);

      callback(restaurants);
    };

    this.searchElement.addEventListener('submit', (event) => {
      this._onFormSubmitted(event);
    });
    this.inputElement.addEventListener('input', () => {
      this._onKeywordChanged();
    });
    this.resetElement.addEventListener('click', () => {
      this._onResetClicked();
    });

    this.onSearchCallback(this.restaurants);
  }

  _setRestaurantDisplayedCount(count) {
    if (count === 0) {
      this.emptyElement.classList.add('active');
    } else {
      this.emptyElement.classList.remove('active');
    }

    this.countElement.innerHTML = `Showing ${count} items out of ${
      this.restaurants.length
    } total${this.keyword !== '' ? ` for <b>'${this.keyword}'</b>` : ''}`;
  }

  async _onFormSubmitted(event) {
    event.preventDefault();

    if (this.keyword === '') {
      return this.onSearchCallback(this.restaurants);
    }

    this.onLoadingCallback();

    const restaurants = await RestaurantProvider.searchRestaurant(this.keyword);

    this._setRestaurantDisplayedCount(restaurants.length);

    return this.onSearchCallback(restaurants);
  }

  _onKeywordChanged() {
    this.keyword = this.inputElement.value || '';

    const resetElementClass = this.resetElement.classList;

    if (this.keyword !== '' && !resetElementClass.contains('active')) {
      resetElementClass.add('active');
    } else if (this.keyword === '' && resetElementClass.contains('active')) {
      resetElementClass.remove('active');

      this.onSearchCallback(this.restaurants);
    }
  }

  _onResetClicked() {
    this.resetElement.classList.remove('active');
    this.inputElement.value = '';

    this.onSearchCallback(this.restaurants);
  }
}

export default SearchInitiator;
