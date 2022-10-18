import RestaurantProvider from '../../provider/restaurant.provider';
import { setActiveNavbar } from '../../utils/navbar';
import SearchInitiator from '../../utils/search.initiator';
import { createRestaurantsLoadingTemplate } from '../templates/creator.template';

class Restaurants {
  async render() {
    return String.raw`
      <section class="restaurant">
        <div class="wrapper_container">
          <div class="restaurant_header">
            <h2>Explore Restaurant</h2>
            <p>Find the best restaurants only on the best websites.</p>
          </div>

          <div class="restaurant_contents">
            <p class="restaurant_count">Showing 0 items out of 0 total</p>
            <div class="restaurant_lists"></div>
            <div class="restaurant__empty_result">
              <random-emoji></random-emoji>
              <span>Can't find any restaurants.</span>
            </div>
          </div>
        </div>
      </section>
      <section class="testimonial">
        <testimonial-section></testimonial-section>
      </section>
    `;
  }

  async afterRender() {
    this._showHero();

    setActiveNavbar('home');

    const container = document.querySelector('section.restaurant .restaurant_lists');
    container.innerHTML = createRestaurantsLoadingTemplate();

    const restaurants = await RestaurantProvider.restaurants();

    const search = new SearchInitiator();

    search.init({
      restaurants,
      onLoading() {
        container.innerHTML = createRestaurantsLoadingTemplate();
      },
    }).search((filteredRestaurants) => {
      container.innerHTML = '';

      filteredRestaurants.forEach((restaurant) => {
        const restauranElement = document.createElement('restaurant-item');

        restauranElement.restaurant = restaurant;
        container.appendChild(restauranElement);
      });
    });
  }

  _showHero() {
    const heroElement = document.querySelector('section.hero');

    heroElement.classList.remove('hidden');
  }
}

export default new Restaurants();
