import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/creator.template';

class FavoriteButtonInitiator {
  async init({ favoriteButtonContainer, favoriteProvider, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._favoriteProvider = favoriteProvider;
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
    const restaurant = await this._favoriteProvider.getRestaurant(id);
    return !!restaurant;
  }

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async (event) => {
      event.stopPropagation();

      await this._favoriteProvider.putRestaurant(this._restaurant);
      this._renderButton();
    });
  }

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteProvider.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }
}

export default new FavoriteButtonInitiator();
