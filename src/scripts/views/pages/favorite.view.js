import FavoriteProvider from '../../provider/favorite.provider';
import { createRestaurantsLoadingTemplate } from '../templates/creator.template';

class FavoriteRestaurants {
  async render() {
    return String.raw`
      <section class="restaurant restaurant_favorite">
        <div class="wrapper_container">
          <div class="restaurant_header">
            <h2>Favorite Restaurants</h2>
            <p>Lists of favorite restaurants.</p>
          </div>

          <div class="restaurant_contents">
            <p class="restaurant_count">Menampilkan 20 restoran</p>
            <div class="restaurant_lists"></div>
            <div class="restaurant__empty_result">
              <random-emoji></random-emoji>
              <span>Whopss! it's look like you doesn't have any favorite restaurant.</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this._hideHero();

    const countElement = document.querySelector('section.restaurant .restaurant_count');
    const container = document.querySelector('section.restaurant .restaurant_lists');
    container.innerHTML = createRestaurantsLoadingTemplate();

    const restaurants = await FavoriteProvider.getAllRestaurants();

    container.innerHTML = '';
    countElement.innerText = `Showing ${restaurants.length} items out of ${restaurants.length}`;

    restaurants.forEach((restaurant) => {
      const restauranElement = document.createElement('restaurant-item');

      restauranElement.restaurant = restaurant;
      container.appendChild(restauranElement);
    });

    if (restaurants.length === 0) {
      const emptyElement = document.querySelector('.restaurant__empty_result');
      emptyElement.classList.add('active');
    }
  }

  _hideHero() {
    const heroElement = document.querySelector('section.hero');

    heroElement.classList.add('hidden');
  }
}

export default new FavoriteRestaurants();
