import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

import repository from "../DATA.json";
import RestauranItem from "./components/restaurant-item";
import { useDrawer } from "./useDrawer";
import { useRestaurant } from "./useRestaurant";
import { useSearch } from "./useSearch";

customElements.define("restaurant-item", RestauranItem);

document.addEventListener("DOMContentLoaded", () => {
  useDrawer("#menu");
  useSearch(repository, (restaurants) => {
    useRestaurant(restaurants);
  });
});
