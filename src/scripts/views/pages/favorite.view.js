import FavoriteProvider from '../../provider/favorite.provider';
import FavoriteRestaurantShowPresenter from '../components/favorite-restaurants/show.presenter';
import FavoriteRestaurantSearchPresenter from '../components/favorite-restaurants/search.presenter';
import FavoriteRestaurantSearchView from '../components/favorite-restaurants/search.view';

class FavoriteRestaurants {
  constructor() {
    this._searchView = new FavoriteRestaurantSearchView();
  }

  async render() {
    const content = this._searchView.getTemplate();

    return String.raw`
      <section class="restaurant restaurant_favorite">
        <div class="wrapper_container">
          <div class="restaurant_header">
            <h2>Favorite Restaurants</h2>
            <p>Lists of favorite restaurants.</p>
          </div>

          ${content}
        </div>
      </section>
    `;
  }

  async afterRender() {
    this._hideHero();
    this._scrollToTop();

    new FavoriteRestaurantShowPresenter({
      view: this._searchView,
      provider: FavoriteProvider,
    });
    new FavoriteRestaurantSearchPresenter({
      view: this._searchView,
      provider: FavoriteProvider,
    });
  }

  _hideHero() {
    const heroElement = document.querySelector('section.hero');

    heroElement.classList.add('hidden');
  }

  _scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default new FavoriteRestaurants();
