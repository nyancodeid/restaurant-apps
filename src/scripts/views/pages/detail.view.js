import UrlParser from '../../utils/url.parser';
import RestaurantProvider from '../../provider/restaurant.provider';
import { createRestaurantDetailLoadingTemplate, createRestaurantDetailTemplate } from '../templates/creator.template';
import favoriteButtonInitiator from '../../utils/favorite.button.initiator';
import reviewInitiator from '../../utils/review.initiator';

class DetailRestaurant {
  async render() {
    return String.raw`
      <section class="restaurant-detail">
        <div class="wrapper_container"></div>
      </section>
    `;
  }

  async afterRender() {
    this._hideHero();

    const content = document.querySelector('section.restaurant-detail > .wrapper_container');
    content.innerHTML = createRestaurantDetailLoadingTemplate();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantProvider.detailRestaurant(url.id);

    if (Object.keys(restaurant).length === 0) {
      this._renderError(content);
      return;
    }

    const template = createRestaurantDetailTemplate(restaurant);

    content.innerHTML = String.raw`
      ${template.detail}
      ${template.description}
      ${template.menu}
      ${template.review}
    `;

    this._renderCustomerReviews({
      reviews: restaurant.customerReviews,
    });

    favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('.description_actions'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });

    this._reviewInitialize(restaurant.id);
  }

  async _renderError(content) {
    // eslint-disable-next-line no-param-reassign
    content.innerHTML = String.raw`
      <div class="error__empty_result">
        <random-emoji></random-emoji>
        <span>Opss! can't display any restaurant data.</span>
      </div>
    `;
  }

  _reviewInitialize(restaurantId) {
    reviewInitiator.init({
      restaurantId,
      form: document.querySelector('form.review__form'),
      onSuccess: (reviews) => {
        this._renderCustomerReviews({ reviews });
      },
    });
  }

  _renderCustomerReviews({ reviews }) {
    const reviewLists = document.querySelector('.review_lists');
    reviewLists.innerHTML = '';

    reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;

      reviewLists.appendChild(reviewItem);
    });
  }

  _hideHero() {
    const heroElement = document.querySelector('section.hero');

    heroElement.classList.add('hidden');
  }
}

export default new DetailRestaurant();
