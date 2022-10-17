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

    this._toggleLoadingState();

    const form = event.target;
    const { name, review } = this._extractFormData(form);

    const customerReviews = await RestaurantProvider.postReview({
      id: this.restaurantId,
      name,
      review,
    });

    form.reset();
    this._toggleLoadingState();

    this.onSuccess(customerReviews);
  }

  _extractFormData(form) {
    const data = new FormData(form);

    const name = data.get('name') || '';
    const review = data.get('review') || '';

    return {
      name,
      review,
    };
  }

  _toggleLoadingState() {
    const loadingElement = document.querySelector('.form_action__loading');

    loadingElement.classList.toggle('active');
  }
}

export default new ReviewSubmitInitator();
