import api from '../../config/api.config';

import RestaurantsLoading from '../../../public/images/restaurants-loading.svg';
import RestaurantDetailLoading from '../../../public/images/detail-loading.svg';
import SpinnerLoadingState from '../../../public/images/spinner.webp';

export const createMenuItemListTemplate = (items) => items.map((item) => `<li><span tabindex="0">${item.name}</span></li>`).join('');

export const createRestaurantDetailTemplate = (restaurant) => {
  const detail = String.raw`
    <div class="detail_content">
      <div class="detail_content__media">
        <img src="${api.picture(restaurant.pictureId, 'medium')}" alt="${restaurant.name}">
      </div>
      <div class="detail_content__description">
        <h3 tabindex="0">${restaurant.name}</h3>

        <div class="description_meta">
          <iconify-icon class="rating" icon="ri:star-fill"></iconify-icon> <span tabindex="0" aria-label="Restaurant Rating is ${restaurant.rating}">${restaurant.rating.toFixed(1)}</span>&nbsp;(${restaurant.customerReviews.length} review) · <span tabindex="0">Kota ${restaurant.city}</span>
        </div>

        <div class="description_detail">
          <p tabindex="0"><iconify-icon icon="ri:map-pin-2-line"></iconify-icon> <span>Address :</span> ${restaurant.address}, ${restaurant.city}</p>

          <p tabindex="0"><iconify-icon icon="ri:bookmark-line"></iconify-icon> <span>Categories :</span> ${restaurant.categories.map((category) => category.name).join(', ')}</p>

          <p tabindex="0"><iconify-icon icon="fluent:food-24-filled"></iconify-icon> <span>Food Menu :</span> ${restaurant.menus.foods.length} item</p>

          <p tabindex="0"><iconify-icon icon="material-symbols:emoji-food-beverage"></iconify-icon> <span>Drinks Menu :</span> ${restaurant.menus.drinks.length} item</p>
        </div>

        <div class="description_actions"></div>
      </div>
    </div>
  `;

  const description = String.raw`
    <div class="detail_description">
      <h5>Description</h5>
      <p>${restaurant.description}</p>
    </div>
  `;

  const menu = String.raw`
    <div class="detail_menu">
      <div class="menu__food">
        <h5><iconify-icon icon="fluent:food-24-filled"></iconify-icon> <span tabindex="0">Food</span></h5>

        <ul>
          ${createMenuItemListTemplate(restaurant.menus.foods)}
        </ul>
      </div>
      <div class="menu__drink">
        <h5><iconify-icon icon="material-symbols:emoji-food-beverage"></iconify-icon> <span tabindex="0">Drink</span></h5>

        <ul>
          ${createMenuItemListTemplate(restaurant.menus.drinks)}
        </ul>
      </div>
    </div>
  `;

  const review = String.raw`
    <div class="detail_review">
      <aside class="review__aside">
        <div class="review__rating">
          <iconify-icon class="rating" icon="ri:star-fill"></iconify-icon>
          <div class="rating_wrapper">
            <span class="rating_count">${restaurant.rating.toFixed(1)}</span>
            <span class="rating_count__max">/5.0</span>
          </div>
        </div>
        <span class="review_count__customer">${restaurant.customerReviews.length} reviews</span>
      </aside>
      <div class="review__list">
        <h4>Write Review</h4>

        <form class="review__form">
          <div class="review__form_content">
            <div class="form_content__group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div> 
            
            <div class="form_content__group">
              <label for="review">Review</label>
              <textarea id="review" name="review" required></textarea>
            </div>

            <div class="form_content__action">
              <div class="action_left">
                <span class="form_action__date">
                  ${new Date().toLocaleDateString()}
                </span>
                <img class="form_action__loading" src="${SpinnerLoadingState}" alt="Loading" />
              </div>

              <button tabindex="0" type="submit">Submit</button>
            </div>
          </div>
        </form>

        <h4>Customer Reviews</h4>

        <div class="review_lists"></div>
      </div>
    </div>
  `;

  return {
    detail,
    description,
    menu,
    review,
  };
};

export const createRestaurantsLoadingTemplate = () => String.raw`
  <img class="skeleton-loading" src="${RestaurantsLoading}" />

  <img class="skeleton-loading" src="${RestaurantsLoading}" />

  <img class="skeleton-loading" src="${RestaurantsLoading}" />
`;

export const createRestaurantDetailLoadingTemplate = () => String.raw`
  <img class="skeleton-loading" src="${RestaurantDetailLoading}" />
`;

export const createRatingTemplate = (rate) => {
  const filledStarCount = Math.round(rate);
  const emptyStarCount = 5 - filledStarCount;

  const filledStar = new Array(filledStarCount).fill(String.raw`
    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fec800" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.866.55l-5.231 4.48l1.598 6.7z"/></svg>
  `);

  const emptyStar = new Array(emptyStarCount).fill(String.raw`
    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fec800" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.866.55l-5.231 4.48l1.598 6.7L12 17zm0-2.344l2.817 1.72l-.766-3.21l2.507-2.147l-3.29-.264L12 7.708l-1.268 3.047l-3.29.264l2.507 2.147l-.766 3.21L12 14.657z"/></svg>
  `);

  return [...filledStar, ...emptyStar].join('');
};

export const createFavoriteButtonTemplate = () => String.raw`
  <button id="favorite-button" tabindex="0">
    <iconify-icon icon="ri:bookmark-3-line"></iconify-icon>
    Add to Favorites
  </button>
`;

export const createFavoritedButtonTemplate = () => String.raw`
  <button id="favorite-button" class="favorited" tabindex="0">
    <iconify-icon icon="ri:bookmark-2-line"></iconify-icon>
    Cancel Favorite
  </button>
`;
