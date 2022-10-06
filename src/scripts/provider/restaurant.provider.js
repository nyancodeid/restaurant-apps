import api from '../config/api.config';
import ToastHelpers from '../utils/toast.helpers';
import ErrorMessage from '../utils/error.message';

class RestaurantProvider {
  static async restaurants() {
    try {
      const response = await fetch(api.lists());
      if (!response.ok) throw Error(ErrorMessage.ERR_REQUEST_FAILED);

      const responseJson = await response.json();

      return responseJson.restaurants;
    } catch (err) {
      ToastHelpers
        .withError(err)
        .error(ErrorMessage.ERR_GET_DATA('restaurants'));

      return [];
    }
  }

  static async searchRestaurant(keyword) {
    try {
      const response = await fetch(api.search(keyword));
      if (!response.ok) throw Error(ErrorMessage.ERR_REQUEST_FAILED);

      const responseJson = await response.json();

      return responseJson.restaurants;
    } catch (err) {
      ToastHelpers
        .withError(err)
        .error(ErrorMessage.ERR_GET_DATA('restaurants'));

      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(api.detail(id));
      if (!response.ok) throw Error(ErrorMessage.ERR_REQUEST_FAILED);

      const responseJson = await response.json();

      return responseJson.restaurant;
    } catch (err) {
      ToastHelpers
        .withError(err)
        .error(ErrorMessage.ERR_GET_DATA('restaurant detail'));

      return {};
    }
  }

  static async postReview({ id, name, review }) {
    try {
      const response = await fetch(api.review(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          review,
        }),
      });
      if (!response.ok) throw Error(ErrorMessage.ERR_REQUEST_FAILED);

      const responseJson = await response.json();

      ToastHelpers.success('Thank you. Your review has been successfully recorded.');

      return responseJson.customerReviews;
    } catch (err) {
      ToastHelpers
        .withError(err)
        .error(ErrorMessage.ERR_POST_DATA('review'));

      return [];
    }
  }
}

export default RestaurantProvider;
