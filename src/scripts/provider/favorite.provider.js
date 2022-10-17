import { openDB as useIndexedDB } from 'idb';
import config from '../config/app.config';

const {
  db: { objectStorageName },
} = config;

class FavoriteRestaurantProvider {
  constructor() {
    this.database = useIndexedDB(config.db.name, config.db.version, {
      upgrade(db) {
        db.createObjectStore(objectStorageName, { keyPath: 'id' });
      },
    });
  }

  async getRestaurant(id) {
    return (await this.database).get(objectStorageName, id);
  }

  async getAllRestaurants() {
    return (await this.database).getAll(objectStorageName);
  }

  async putRestaurant(restaurant) {
    return (await this.database).put(objectStorageName, restaurant);
  }

  async deleteRestaurant(id) {
    return (await this.database).delete(objectStorageName, id);
  }
}

export default new FavoriteRestaurantProvider();
