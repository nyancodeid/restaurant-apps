import { openDB as useIndexedDB } from 'idb';
import config from '../config/app.config';

const {
  db: { object_store_name },
} = config;

class FavoriteRestaurantProvider {
  constructor() {
    this.database = useIndexedDB(config.db.name, config.db.version, {
      upgrade(db) {
        db.createObjectStore(object_store_name, { keyPath: 'id' });
      },
    });
  }

  async getRestaurant(id) {
    return (await this.database).get(object_store_name, id);
  }

  async getAllRestaurants() {
    return (await this.database).getAll(object_store_name);
  }

  async putRestaurant(restaurant) {
    return (await this.database).put(object_store_name, restaurant);
  }

  async deleteRestaurant(id) {
    return (await this.database).delete(object_store_name, id);
  }
}

export default new FavoriteRestaurantProvider();
