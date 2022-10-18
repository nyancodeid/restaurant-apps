import api from '../config/api.config';
import ToastHelpers from '../utils/toast.helpers';
import { createRatingTemplate } from '../views/templates/creator.template';

class RestauranItem extends HTMLElement {
  set restaurant(data) {
    this.pictureId = data.pictureId;
    this.render(data);
  }

  get thumbnail() {
    return api.picture(this.pictureId);
  }

  render({
    id, name, description, city, rating = 0,
  }) {
    this.innerHTML = String.raw`
      <div class="restaurant_item__header">
        <img
          class="lazyload"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src="${this.thumbnail}"
          alt="${name}"
        />

        <span class="badge">Kota ${city}</span>
      </div>
      <div class="restaurant_item__content">
        <div class="restaurant_title">
          <a class="restaurant_item__title" href="/#/detail/${id}">
            <h3>${name || '-'}</h3>
          </a>

          <button tabindex="0" type="button" class="restaurant_item__reservasion touch__target" aria-label="Made a reservasion">
            <iconify-icon icon="ri:phone-fill"></iconify-icon>
          </button>
        </div>
        <div class="restaurant_item__rating">
          ${createRatingTemplate(rating)}

          <span class="badge" tabindex="0" aria-label="Restaurant rating is ${rating}">${rating}</span>
        </div>
        <p>
          ${description || '-'}
        </p>
      </div>
    `;

    this.afterRender();
  }

  afterRender() {
    const reservasionButton = this.querySelector('.restaurant_item__reservasion');

    reservasionButton.addEventListener('click', () => {
      ToastHelpers.info('Unfortunately, this feature is not yet available because it is still on development.');
    });
  }
}

export default RestauranItem;
