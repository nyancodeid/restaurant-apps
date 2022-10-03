export const useRestaurant = (restaurants) => {
  const container = document.querySelector(".restaurant_lists");

  container.innerHTML = "";

  if (restaurants && Array.isArray(restaurants)) {
    for (const restaurant of restaurants) {
      const restauranElement = document.createElement("restaurant-item");

      restauranElement.restaurant = restaurant;
      container.appendChild(restauranElement);
    }
  }
};
