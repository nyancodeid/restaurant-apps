class FavoriteRestaurantSearchView {
  getTemplate() {
    return String.raw`
      <section class="search_widget__wrapper non-absolute">
          <div class="search_widget__inner">
            <input
              id="search-query"
              name="search"
              class="search_widget__input"
              type="text"
              placeholder="Find your favorited restaurant"
            />

            <div
              class="search_widget__action touch__target"
            >
              <iconify-icon icon="heroicons-solid:search" class="icon"></iconify-icon>
            </div>
          </div>
      </section>
      <div class="restaurant_contents">
        <div class="restaurant_lists"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('search-query').addEventListener('input', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const viewContainer = document.querySelector('.restaurant_contents');

    if (restaurants.length === 0) {
      viewContainer.innerHTML = this._getEmptyTemplate();
    } else {
      viewContainer.innerHTML = '<div class="restaurant_lists"></div>';

      const restaurantListContainer = viewContainer.querySelector('.restaurant_lists');

      restaurants.forEach((restaurant) => {
        const restauranItemElement = document.createElement('restaurant-item');

        restauranItemElement.restaurant = restaurant;
        restaurantListContainer.appendChild(restauranItemElement);
      });
    }

    viewContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyTemplate() {
    return String.raw`
      <div class="restaurant__empty_result active">
        <random-emoji></random-emoji>
        <span>Whopss! it's look like you doesn't have any favorite restaurant.</span>
      </div>
    `;
  }
}

export default FavoriteRestaurantSearchView;
