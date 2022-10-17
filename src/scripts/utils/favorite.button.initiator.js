import FavoriteRestaurantProvider from '../provider/favorite.provider';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/creator.template';

class FavoriteButtonInitiator {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  }

  async _renderButton() {
    const { id } = this._restaurant;
    const isRestaurantExist = await this._isRestaurantExist(id);

    if (isRestaurantExist) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  }

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantProvider.getRestaurant(id);
    return !!restaurant;
  }

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async (event) => {
      event.stopPropagation();

      await FavoriteRestaurantProvider.putRestaurant(this._restaurant);
      this._renderButton();
    });
  }

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantProvider.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }
}

export default new FavoriteButtonInitiator();
