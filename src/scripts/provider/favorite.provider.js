import { openDB as useIndexedDB } from 'idb';
import config from '../config/app.config';

const {
  db: { objectStorageName },
} = config;

const database = useIndexedDB(config.db.name, config.db.version, {
  upgrade(db) {
    db.createObjectStore(objectStorageName, { keyPath: 'id' });
  },
});

const FavoriteRestaurantProvider = {
  async getRestaurant(id) {
    if (!id) return undefined;

    return (await database).get(objectStorageName, id);
  },

  async getAllRestaurants() {
    return (await database).getAll(objectStorageName);
  },

  async searchRestaurants(query) {
    const restaurants = await this.getAllRestaurants();

    return restaurants.filter((restaurant) => {
      const restaurantTitle = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantTitle = restaurantTitle.replace(/\s/g, '');

      const cleanQuery = query.toLowerCase().replace(/\s/g, '');
      return jammedRestaurantTitle.includes(cleanQuery);
    });
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) return undefined;

    return (await database).put(objectStorageName, restaurant);
  },

  async deleteRestaurant(id) {
    return (await database).delete(objectStorageName, id);
  },
};

export default FavoriteRestaurantProvider;
