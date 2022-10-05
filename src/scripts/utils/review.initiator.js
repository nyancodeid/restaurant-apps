import RestaurantProvider from '../provider/restaurant.provider';

class ReviewSubmitInitator {
  init({ form, restaurantId, onSuccess }) {
    this.restaurantId = restaurantId;
    this.formElement = form;
    this.onSuccess = onSuccess;

    this.formElement.addEventListener('submit', (event) => {
      this._onSubmitReview(event);
    });
  }

  async _onSubmitReview(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const review = data.get('review');

    const customerReviews = await RestaurantProvider.postReview({
      id: this.restaurantId,
      name,
      review,
    });

    this.onSuccess(customerReviews);
  }
}

export default new ReviewSubmitInitator();
